import { Sequelize } from 'sequelize';
const Op = Sequelize.op;
import sharp from "sharp";
import { unlink } from "fs/promises";
import { Image } from "../models/Images.js";
import dotenv from 'dotenv';

dotenv.config();

export const GetAll = async (req, res) => {

    let images = await Image.findAll();

    res.json({ images });

};

export const GetOne = async (req, res) => {

    let { id } = req.params;

    let image = await Image.findByPk(id);

    if (image) {
        res.json({ image });
    } else {
        res.json({ error: 'Imagem não encontrada' });
    }
};

export const Delete = async (req, res) => {

    let { id } = req.params;

    await Image.destroy({ where: { id } });

    res.json({});
};

export const uploadFile = async (req, res) => {

    const { imageTitle } = req.body;

    if (req.file) {

        const filename = `${req.file.filename}.jpg`;

        await sharp(req.file.path)
            /*.resize(300, 300, {
                fit: sharp.fit.fill
            })*/
            .toFormat('jpeg')
            .toFile(`./public/files/${filename}`);

        await unlink(req.file.path);

        await Image.create({ image: filename, path: `files/${filename}`, imageTitle });

        res.json({ image: `${filename}` });

    } else {

        res.status(400);
        res.json({ error: 'Arquivo inválido' });

    }
};















