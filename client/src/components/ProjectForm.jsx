import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFilePreview } from "../lib/customHooks";
import addFileIMG from "../assets/images/add_file.png";
import { addProject, updateProject } from "../lib/common";
import FormSelectTechno from "./FormSelectTechno";

function ProjectForm({ project, validate }) {
  const navigate = useNavigate();

  const handleValuesSelected = (values) => {
    const selectedTechno = values.map((value) => value.value);
    setValue("technologies", selectedTechno);
  };

  // Mémoisation du formulaire
  const { register, watch, handleSubmit, reset, setValue } = useForm({
    defaultValues: useMemo(
      () => ({
        title: project?.title,
        description: project?.description,
        githubUrl: project?.githubUrl,
        projectUrl: project?.projectUrl,
        technologies: project?.technologies,
      }),
      [project],
    ),
  });
  // reset le formulaire en gardant les valeurs précédentes quand on modifie un projet
  useEffect(() => {
    reset(project);
  }, [project]);

  // preview de l'image
  const file = watch(["file"]);
  const [filePreview] = useFilePreview(file);

  const onSubmit = async (data) => {
    // When we create a new project
    if (!project) {
      if (!data.file[0]) {
        alert("Vous devez ajouter une image");
      }
      const newProject = await addProject(data);
      if (!newProject.error) {
        validate(true);
      } else {
        alert(newProject.message);
      }
    } else {
      const updatedProject = await updateProject(data, data.id);
      if (!updatedProject.error) {
        navigate("/");
      } else {
        alert(updatedProject.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-1/2 min-w-80 max-w-[450px] flex-col text-sm text-black sm:text-base"
    >
      <input type="hidden" id="id" {...register("id")} />
      <label htmlFor="title" className="mb-5">
        <input
          type="text"
          id="title"
          placeholder="Titre du projet"
          className="w-full rounded p-2 outline-none"
          {...register("title")}
        />
      </label>
      <label htmlFor="description" className="mb-5">
        <textarea
          type="text"
          id="description"
          placeholder="Description"
          rows={5}
          className="w-full rounded p-2 outline-none"
          {...register("description")}
        />
      </label>
      <label htmlFor="githubUrl" className="mb-5">
        <input
          type="text"
          id="githubUrl"
          placeholder="Lien vers repo Github"
          className="w-full rounded p-2 outline-none"
          {...register("githubUrl")}
        />
      </label>
      <label htmlFor="projectUrl" className="mb-5">
        <input
          type="text"
          id="projectUrl"
          placeholder="Lien vers site web du projet"
          className="w-full rounded p-2 outline-none"
          {...register("projectUrl")}
        />
      </label>
      <label htmlFor="technologies" className="mb-5">
        <FormSelectTechno
          register={register}
          onValueChange={handleValuesSelected}
        />
      </label>
      <label htmlFor="file" className="mb-5 cursor-pointer">
        <div className="flex">
          {filePreview || project?.imageUrl ? (
            <>
              <img
                src={filePreview ?? project?.imageUrl}
                alt="preview"
                className="relative h-60 w-full rounded-md object-cover"
              />
              <span className="absolute hidden">Modifier</span>
            </>
          ) : (
            <>
              <img
                src={addFileIMG}
                alt="Add file"
                className="object-fit relative h-60 w-full rounded-md object-cover"
              />
              <span className="absolute hidden">Ajouter une image</span>
            </>
          )}
        </div>
        <input {...register("file")} type="file" id="file" className="hidden" />
      </label>
      <button
        type="submit"
        className="mx-auto w-1/2 rounded-md bg-quaternary px-4 py-2 font-semibold text-primary transition-all duration-300 hover:bg-secondary hover:text-quaternary hover:shadow-md"
      >
        Publier
      </button>
    </form>
  );
}

export default ProjectForm;
