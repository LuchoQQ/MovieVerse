/* eslint-disable */
import Image from "next/image";
import {
	ThumbUpIcon,
	TrendingUpIcon,
	CalendarIcon,
} from "@heroicons/react/outline";
import { forwardRef, useState, useEffect } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original/";

	const [showModal, setShowModal] = useState(false);

	// Close modal function
	const closeModal = () => {
		setShowModal(false);
	};

	// Use effect with event listener for closing the modal with ESC key
	useEffect(() => {
		document.addEventListener("keydown", closeModal);
		return () => {
			document.removeEventListener("keydown", closeModal);
		};
	}, [closeModal]);

	useEffect(() => {
		if (showModal) {
			document.addEventListener("click", (e) => {
				const target = e.target.className;
				if (target.toString().includes("modal")) {
					closeModal();
				}
			});
		}
	}, [showModal]);

	{
		/* ANIMATION  */
	}
	const backdrop = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const modal = {
		hidden: {
			opacity: 0,
			y: "-100vh",
		},
		visible: {
			y: "0vh",
			opacity: 1,
			transition: { delay: 0.2 },
		},
	};

	const thumbnail = {
		hidden: {
			opacity: 0,
			x: "-100vw",
		},
		visible: {
			x: "0vw",
			opacity: 1,
			transition: { delay: 0.1 },
		},
	};

	return (
		<>
			{/* MOVIE ITEM */}
			<div
				ref={ref}
				className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
				type="button"
				onClick={() => setShowModal(true)}
			>
				<Image
					layout="responsive"
					src={
						`${BASE_URL}${result.backdrop_path || result.poster_path || "https://res.cloudinary.com/diylksocz/image/upload/v1653600545/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab_fllbvh.png" }`
					}
					height={1080}
					width={1920}
					alt="image-thumbnail"
				/>
				<div className="p-2">
					<p className="truncate max-w-md">{result.overview}</p>

					<h2 className="mt-1 text-2xl text-white transition-all duration-100 easy-in-out group-hover:font-bold">
						{result.title || result.original_name}
					</h2>

					<p className="flex items-center opacity-0 group-hover:opacity-100">
						{result.media_type && `${result.media_type} •`}{" "}
						{result.release_date || result.first_air_date} •{" "}
						<ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
					</p>
				</div>
			</div>

			{/* MOVIE MODAL */}

			{showModal ? (
				<>

							<div className="modal justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-bgModal z-100">
								<div className="relative w-auto my-6 mx-auto max-w-3xl">
									{/*content*/}

										<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
											{/*header*/}
											<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
												<h3 className="text-3xl font-semibold">
													{result.title || result.original_name}
												</h3>
												<button
													className="p-1 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
													onClick={closeModal}
												>
													<span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
														×
													</span>
												</button>
											</div>

											{/*body*/}
											<div className="relative p-6 flex-auto">
												<Image
													layout="responsive"
													src={
														`${BASE_URL}${
															result.backdrop_path || result.poster_path
														}`
													}
													height={1080}
													width={1920}
													alt="image-thumbnail"
												/>
												<p className="my-4 text-slate-500 text-lg leading-relaxed">
													{result.overview}
												</p>
												<div>
													<div>
														{result.media_type &&
															`Media type:${result.media_type}`}
													</div>
													<div>
														<ThumbUpIcon className="h-5 mx-2 inline" />
														Likes: {result.vote_count}
													</div>
													<div>
														<TrendingUpIcon className="h-5 mx-2 inline" />
														Average votes: {result.vote_average}
													</div>
													<div>
														<CalendarIcon className="h-5 mx-2 inline" />
														Release date:{" "}
														{result.release_date || result.first_air_date}
													</div>
												</div>
											</div>
											{/*footer*/}
											{/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        Save Changes
                                    </button>
                                </div> */}
										</div>
								</div>
							</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
});

export default Thumbnail;
