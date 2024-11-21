import { useState } from 'react'
import { add } from '../utils/stringCalculator'


const StringCalculator = () => {
	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')


	const handleInput = (event) => {
		if (output !== '')
			setOutput('')
		setInput(event.target.value)
	}


	const handleCalculate = () => {
		try {
			const result = add(input)
			setOutput(result)
		} catch (error) {
			setOutput(error.message)
		}
	}

	return (
		<article className='w-full h-[100vh] vflex !gap-10 bg-ashGray font-sans'>
			<h1 className='text-3xl tracking-wider text-midnightBlue'>String Calculator</h1>
			<textarea
				className='w-96 h-32 p-4 deepShadow textareaScrollbar'
				placeholder='Please, enter your input here.'
				value={input}
				onChange={handleInput}
			/>
			<button
				type='button'
				className='btn'
				onClick={handleCalculate}
			>
				Calculate
			</button>
			{output !== '' &&
				<p className={`para rounded-xl border border-duskGray text-sageGray`}>
					{output}
				</p>
			}
		</article>
	)
}

export default StringCalculator