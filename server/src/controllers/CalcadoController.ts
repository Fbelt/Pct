import { Request, Response } from 'express';
import prisma from "@database"; 

export const postCalcado = async (req: Request, res: Response) => {
    try {
        const { nome, cor, marca, tamanho, preco, quantidade_em_estoque } = req.body;
        
        if (!nome || !cor || !marca || !tamanho || !preco || !quantidade_em_estoque) {
            return res.status(400).json({
                message: "Preencha os campos obrigatórios",
            });
        }
        const Calcado = await prisma.calcado.create({                         
            data: {
                nome_produto : nome,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque,
            }
            
        });

        return res.status(201).json({
            message: "Calçado criado com sucesso",  
            Calcado,

        })} catch (error) {
        return res.status(400).json({
            message: "Erro ao criar novo calçado",
            error,
        });
    }

}   

export const getCalcado = async (req: Request, res: Response) => {
    try {
        const calcados = await prisma.calcado.findMany(); 
        
        if (calcados.length === 0) {
            return res.status(404).json({
                message: "Nenhum calçado encontrado",
            });
        }  
        return res.status(200).json(calcados);

    } catch (error) {
        return res.status(400).json({
            message: "Erro ao buscar calçado",
            error,
        });
    }
}

export const updateCalcado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nome, cor, marca, tamanho, preco, quantidade_em_estoque } = req.body;

        const calcado = await prisma.calcado.update({
            data: {
                nome_produto : nome,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque,
            },
            where: {
                id: Number(id),
             },
        });

        return res.status(200).json({
            message: "Calçado atualizado com sucesso",
            calcado,
        })

    } catch (error) {
        return res.status(400).json({
            message: "Erro ao atualizar calçado",
            error,
        });
    }
}

export const deleteCalcado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(404).json({
                message: "Calçado não encontrado",
            });
        }

        const calcado = await prisma.calcado.delete({
            where: {
                id: Number(id),
             },
        });

        return res.status(200).json({
            message: "Calçado deletado com sucesso",
            calcado,
        })

    } catch (error) {
        return res.status(400).json({
            message: "Erro ao deletar calçado",
            error,
        });
    }

}