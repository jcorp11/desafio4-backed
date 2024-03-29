import { postModel } from "../models/like.model.js";

const read = async (req, res) => {
  try {
    console.log("iniciando get");
    const posts = await postModel.findAll();
    console.log("terminando get");
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  //   console.log(req.body);
  const { titulo, img: url, descripcion } = req.body;

  if (!titulo || !url) {
    return res.status(400).json({ message: "Missing data" });
  }
  const newPost = { titulo, img: url, descripcion };
  try {
    const post = await postModel.create(newPost);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await postModel.like(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await postModel.remove(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postController = {
  read,
  create,
  update,
  remove,
};
