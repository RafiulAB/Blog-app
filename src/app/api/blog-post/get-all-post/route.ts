import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const getAllBlogPosts = await prisma.post.findMany();
    if (getAllBlogPosts && getAllBlogPosts.length) {
      return NextResponse.json({
        success: true,
        data: getAllBlogPosts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch blog posts. Please try again",
      });
    }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success:false,
            message:'something went wrong'
        })
    }
}