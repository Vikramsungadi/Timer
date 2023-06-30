import { useEffect, useState } from "react";
import Button from "./Button";
import Plus from "../assets/Plus";
import Skip from "../assets/Skip";
import Card from "./Card";
import Play from "../assets/Play";
import Resume from "../assets/Resume";

const Timer = () => {
	let initial = 60;
	let [fullTime, setFullTime] = useState(initial);
	let [time, setTime] = useState(initial);
	let [on, setOn] = useState(false);

	function addTen() {
		setTime((prev) => {
			setFullTime(prev + 10);
			return prev + 10;
		});
	}
	function skip() {
		setFullTime(60);
		setTime(60);
		setOn(false);
	}
	function toggle() {
		setOn((prev) => !prev);
	}
	const correctZero = (time) => (time >= 10 ? time : `0${time}`);

	function correctedTime() {
		if (time > 60) {
			let min = correctZero(parseInt(correctZero(time / 60)));
			return `${min} : ${correctZero(time - min * 60)}`;
		}

		return `00 : ${correctZero(time)}`;
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (time > 0 && on) {
				setTime((prev) => prev - 1);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [time, on]);

	return (
		<section className='mx-auto flex flex-col items-center  gap-6'>
			<h1 className='mt-3 text-2xl md:mt-8 md:text-4xl md:font-semibold '>Routine Starting in..</h1>
			<p className='text-xs text-gray-400 md:text-base'>Subheading here...</p>
			<div
				style={{
					backgroundImage: `conic-gradient(${time < 30 ? "rgb(251 191 36)" : "#6c3e77"} ${
						(360 / fullTime) * time - 0.5
					}deg,rgba(156 ,163 ,175, 0.3) ${(360 / fullTime) * time}deg)`,
				}}
				className={`relative  mt-8 aspect-square w-[var(--width)]   rounded-full transition-all duration-200 [--width:16rem]`}>
				<div
					className={`absolute inset-0 left-4 top-4 grid aspect-square max-w-[calc(var(--width)-2rem)] place-items-center rounded-full bg-white text-5xl font-semibold shadow-sm ${
						time == 0 ? "animate-scaleUp" : ""
					}`}>
					{correctedTime()}
				</div>
			</div>

			<div className='mt-8 flex w-full max-w-xs items-center justify-center gap-4 max-sm:flex-wrap sm:justify-between'>
				<Button className='group' onClick={addTen}>
					<Plus className='group-hover:stroke-white' /> 10 sec
				</Button>
				<Button className='group' onClick={toggle}>
					{!on ? <Play className='group-hover:stroke-white' /> : <Resume className='group-hover:stroke-white' />}
					{!on ? "Start" : "Stop"}
				</Button>
				<Button className='group' onClick={skip}>
					<Skip className='group-hover:stroke-white' /> Reset
				</Button>
			</div>
			<Card></Card>
		</section>
	);
};

export default Timer;
