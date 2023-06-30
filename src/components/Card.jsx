import Cleanser from "../assets/Cleanser.svg";
import timer from "../assets/timer.svg";
const Card = () => {
	return (
		<div className='mb-10 flex w-full max-w-sm flex-col gap-5 rounded-md bg-gray-200 p-6'>
			<div className=' flex items-center '>
				<p className='text-lg'>Step 2</p>
				<span className='opacity-70'>/3</span>
			</div>
			<div className='grid grid-cols-[auto_1fr] gap-4 '>
				<div className='grid place-items-center'>
					<img src={Cleanser} className=' flex aspect-square h-10 items-center justify-center' alt='' />
				</div>
				<div className='grid gap-4'>
					<h3 className='text-lg font-semibold'>Cleansing</h3>
					<div className='flex justify-between text-xs text-primary'>
						<div className='flex gap-1'>
							<img src={timer} className='h-5 w-5' alt='' />
							<span className=''>60 sec</span>
						</div>
						<span className='font-bold '>How to do</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
