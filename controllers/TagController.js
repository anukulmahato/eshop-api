import asyncHandler from "express-async-handler";
import prisma from "../config/client.js";


/**
 * @desc    Get all brand data
 * @route   GET /api/v1/brand
 */
export const getAllTag = asyncHandler( async(req, res) => {

    //get all brands data from db
    const data = await prisma.tag.findMany();

    //response
    res.status(200).json( data )
} )



/**
 * Get Single Brands
 * @method GET
 * @endpoint /api/v1/brand/:id
 */
export const getSingleTag = asyncHandler(async(req, res) => {
    
    //get brand id
    const {id} = req.params;

    //get single data from db
    const data = await prisma.tag.findUnique({
        where: { id }
    });

    //response
    res.status(200).json( data )
});



/**
 * Create data
 * @method post
 * @endpoint /api/v1/brand
 */
export const createTag = asyncHandler(async(req, res) => {

    //post new brand data
    const data = await prisma.tag.create({
        data : req.body
    });

    //response
    res.status(200).json( data )
});


/**
 * delete single data
 * @method delete
 * @endpoint /api/v1/brand:id
 */
export const deleteSingleTag = asyncHandler(async(req,res) => {

    //get id
    const { id } = req.params;

    //delete single data from db
    const data = await prisma.tag.delete({
        where : { id }
    })

    //respons
    res.status(200).json(data)

});

/**
 * update data
 * @method update
 * @endpoint /api/v1/brand/:id
 */
export const updateSingleTag = asyncHandler(async(req, res) => {
    
    //get id
    const { id } = req.params;

    //update brand data from db
    const data = await prisma.tag.update({
        where : { id },
        data: req.body
    });

    //respons
    res.status(200).json( data )

});
