import React from 'react'
import './Ratings_&_Reviews.css'

export default function RatingsReviews() {

    return (
        <>
            <div class="my-4 bg-white p-3">
                <div class="section-title-1">
                    <h3 class="heading-5 font-bold mb-0">
                        <span class="mr-4">Ratings &amp; Reviews</span>
                    </h3>
                </div>
                <div class="product-desc-tab bg-white">
                    <div class="review-paragraph"> 
                        <div class="leave-review">
                            <div class="section-title section-title--style-1">
                                <h3 class="section-title-inner text-xl font-semibold uppercase">
                                    Write a review
                                </h3>
                            </div>
                            <input type="hidden" name="_token" value="T5x2AokuzglvMhxTfCircI62PsHJZ0wryLZeJuge" />
                            <input type="hidden" name="product_id" value="2244" />
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <div class="form-group">
                                        <label class="text-xs uppercase text-gray-500">Your name</label>
                                        <input type="text" name="name" value="" class="form-control w-full border rounded p-2" required="" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex mt-4 reviewStar">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div class="grid grid-cols-1 mt-4">
                                <textarea class="form-control w-full border rounded p-2" rows="4" name="comment" placeholder="Your review" required=""></textarea>
                            </div>
                            <div class="grid grid-cols-1 mt-4">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input hidden" id="inputGroupFile01" name="image" accept="image/*" />
                                    <label class="block bg-gray-200 text-gray-700 text-sm rounded p-2 text-center cursor-pointer" for="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                            <div class="text-right mt-4">
                                <button type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    Send review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
