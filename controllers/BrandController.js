import asyncHandler from "express-async-handler";
import prisma from "../config/client.js";
import { cloudUpload } from "../utils/cloudinary.js";


/**
 * @desc    Get all brand data
 * @route   GET /api/v1/brand
 */
export const getAllBrand = asyncHandler( async(req, res) => {

    //get all brands data from db
    const data = await prisma.brand.findMany();

    //response
    res.status(200).json({ data })
} )



/**
 * Get Single Brands
 * @method GET
 * @endpoint /api/v1/brand/:id
 */
export const getSingleBrand = asyncHandler(async(req, res) => {
    
    //get brand id
    const {id} = req.params;

    //get single data from db
    const data = await prisma.brand.findUnique({
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
export const createBrand = asyncHandler(async(req, res) => {


    //file upload cloudinary
    const fileData = await cloudUpload(req.file.path)

    //post new brand data
    const data = await prisma.brand.create({
        data : { ...req.body, logo : fileData.secure_url }
    });

    //response
    res.status(200).json( data )
});


/**
 * delete single data
 * @method delete
 * @endpoint /api/v1/brand:id
 */
export const deleteSingleBrand = asyncHandler(async(req,res) => {

    //get id
    const { id } = req.params;

    //delete single data from db
    const data = await prisma.brand.delete({
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
export const updateSingleBrand = asyncHandler(async(req, res) => {
    
    //get id
    const { id } = req.params;

    //update brand data from db
    const data = await prisma.brand.update({
        where : { id },
        data: req.body
    });

    //respons
    res.status(200).json( data )

});
