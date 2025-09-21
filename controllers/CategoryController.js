import asyncHandler from "express-async-handler";
import prisma from "../config/client.js";


/**
 * @desc    Get all brand data
 * @route   GET /api/v1/brand
 */
export const getAllCategory = asyncHandler( async(req, res) => {

    //get all brands data from db
    const data = await prisma.category.findMany();

    //response
    res.status(200).json( data )
} )



/**
 * Get Single Brands
 * @method GET
 * @endpoint /api/v1/brand/:id
 */
export const getSingleCategory = asyncHandler(async(req, res) => {
    
    //get brand id
    const {id} = req.params;

    //get single data from db
    const data = await prisma.category.findUnique({
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
export const createCategory = asyncHandler(async(req, res) => {

    //post new brand data
    const data = await prisma.category.create({
        data : { ...req.body, photo : req.file.path }
    });

    //response
    res.status(200).json( data )
});


/**
 * delete single data
 * @method delete
 * @endpoint /api/v1/brand:id
 */
export const deleteSingleCategory = asyncHandler(async(req,res) => {

    //get id
    const { id } = req.params;

    //delete single data from db
    const data = await prisma.category.delete({
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
export const updateSingleCategory = asyncHandler(async(req, res) => {
    
    //get id
    const { id } = req.params;

    //update brand data from db
    const data = await prisma.category.update({
        where : { id },
        data: req.body
    });

    //respons
    res.status(200).json( data )

});
