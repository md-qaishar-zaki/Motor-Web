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
                            <div class="text-center">
                                There have been no reviews for this product yet.
                            </div>
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
                                    <div class="grid grid-cols-1 mt-4">
                                        <div class="rating mt-1 mb-1">
                                            <input type="radio" id="star5" name="rating" value="5" class="hidden" required="" />
                                            <label class="star" for="star5" title="Awesome"></label>
                                            <input type="radio" id="star4" name="rating" value="4" class="hidden" required="" />
                                            <label class="star" for="star4" title="Great"></label>
                                            <input type="radio" id="star3" name="rating" value="3" class="hidden" required="" />
                                            <label class="star" for="star3" title="Very good"></label>
                                            <input type="radio" id="star2" name="rating" value="2" class="hidden" required="" />
                                            <label class="star" for="star2" title="Good"></label>
                                            <input type="radio" id="star1" name="rating" value="1" class="hidden" required="" />
                                            <label class="star" for="star1" title="Bad"></label>
                                        </div>
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
