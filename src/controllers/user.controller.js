import { asyncHandler } from "../utils/asyncHandler.js";
import apiError from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { apiResponse } from "../utils/apiResponse.js";


const registerUser = asyncHandler( async (req, res) => { //async for additional wait
    //get user details from frontend 
    //validation - not empty
    //check if user exist or not:username or email
    //check for image or avatar
    //upload them to cloudinary,avatar
    //create object data create entry call
    //remove pass and refresh token from res
    //check for user creation
    //return ans


    const{fullName,email,username,password}=req.body;
    // console.log(email);
    // if(fullName ==""){
    //     throw new apiError(400,"fullName is req")
    // } for other also
    if(
        [fullName,email,username,password].some(()=>{
            field?.trim()===""
        })
    ){
        throw new apiError(400,"all field are req")
    }
    //validation

    const existedUser = User.findOne({
            $or : [{username},{email}]
       })
       if(existedUser){
        throw new apiError (409,"username already exist")
       }

    const avatarLocalPath = req.files?.avatar[0]?.path //to get the filename
    const coverImageLocalPath = req.files?.coverImage[0]?.path //to get the image
    
    if(!avatarLocalPath){
        throw new apiError(400,"avatar is req")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    if(!avatar){
        throw new apiError(400,"avatar file is req")
    }

    const user = await User.create({
        fullName,
        avatar:avatar.url ,
        coverImage:coverImage?.url || "",
        password,
        username:username.toLowerCase(),
        email
    })

    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken" //space btw 2 fields
    ) //check wherether user created or not

    if(!createdUser){
        throw new apiError(500,"something went wrong while creating user")
    }
    return res.status(201).json(/*createdUser*/
        new apiResponse(200,createdUser,"user registered successfully")
    )

});

export { registerUser };

