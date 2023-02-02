import React from "react";
import Image from "next/legacy/image";


const Footer = () => {
	return (
		<div className="">
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 dark:bg-[#3d3d3d]">
				<div className="p-5 ">
					<ul>
						<Image alt="" src='https://raw.githubusercontent.com/bobyakbr/finik/main/public/logo_full.webp' width="100" height="130" />

					</ul>
				</div>
				<div className="p-5">
					<ul className=" rounded-xl p-5">
						<p className="text-gray-800 dark:text-white font-bold text-xl pb-4">Contact Us</p>
						<li className=" text-gray-500 dark:text-white text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer">
							<p>  <Image height="15" width="15" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIieXWPUscURTG8d8qamyUWJldsU5K8ROYPr4QsAsI6UO6FSVfJzYioo0h3yBBfAExabQwhWKhQYgoihYzC8tm2HtndtTCB05z7zznfzhzODM8N1VyPDuEaUziNUbS8z/YxxpWcVZWcf1YxF/cBeIcC6mnI1XxIwLYGlsYLQodkbQxL7QRR6jlhfZjswNoI37iRR7wlxKgjZiPhQ6JG6TYOMfLVkhXBngGA7FVRmgQUzHgd4FE16hLBqcmaeV1wDMZUaDf2reunuGpBzy/YsAXgSSvMjzDAc9FqyGr1T2BwrLWbHfA8999Fvg4kORD5FmzTgL3YEX7tl1J3mk1jXp61s6zHAOeDSQpEu9jwH04LRF6gt4YMHwsETwXCyWZ3O8lQDfk+9lAsjZ3OoDuydjRsaphtwB0WzLxHWkQ6zmgq0r8yFTwGZdtgP/wSYF3GqM3OMyAHqR3D6px3DZBbzD20NCGlprAXx8LCm+bwBOPCa7gm4IL4kl1D6g+L/ymwoEkAAAAAElFTkSuQmCC" /> Grand Wijaya Center D12, South Jakarta </p>

						</li>
						<li className="flex text-gray-500 text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer dark:text-white">
							<p className="flex"><Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACRElEQVRoge3ZO2sUURiH8d8aYwTRRjFeMCBWGksRSxHtlDSioCBC1I8g+AnETq3Ub2ARjNcQSaGBIMRCI3hDQRGsjAlKBFFhLY5b5DI7cybunC32gbdYmFn+D+dwLu/QoUNSBjCJ73iKfWnjxNONa6gvqFlsTZgrirV4YLFEo+6ni1acLXgpW6JRp1IFLEIv3sqXqGMGm9PEbM4qTCgm0ajbSZLmcEGcRKNOpgjbjI/KiUxjU4K8mcwpJ1LHUIK8mbxTXqSO49VHXpohyxN5U33kwIoFv0eX+X99y3z/v7ERf5QfkSfVR85mTHmRttrpB5STeG7xVE1KDVPiRQ6lCJvHMXESd9LEzKeGccVFBtPELEY/fikmMoMdaWIW45Lio/IMa9LEzKdHCFhUZuzfO23JLvxQXOYWViZJWoCz4laxG8KC0ZYs1U1pVpfTxMynG4/EyVzRpiPTi/fip1lXirB59OGTOJlhrE4RNo/d+CpOZtTS+0wXTgut2N94LRyRKmOv0AuOkZky/wRwQPY+dVdoFFbCQfxsEjzrODOIewWencaJqmQGSsjE1rCKOpr7xU+z2JrFuSpk9uBLi2XqGMG2Vsv043MFMrPCYtNStovfNMvUZKtFCG2lmBtmmfpWhQjhE8X1FopMVCXS4Iy4+0zROlylRIOd4m6aeXW12vjz6cFFxRsaWTWiTW6g/XisnMQLrKs+cjY1HBU33V4J96G2pIYjeCgc4bMkxrEhUcZo1gun4pvCB6M5fMB54ZrdoUMK/gIkOoi24oe75gAAAABJRU5ErkJggg==" alt="" height="10" width="20" />   +62....</p>
						</li>
						<li className="flex  text-gray-500 text-sm pb-2 font-semibold hover:text-[#B38D24] cursor-pointer dark:text-white">
							<p className="flex" ><Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA/klEQVRIie3TIUsEURQF4G9HiyzYDBbFLgbDRoOIKCx2sZisRqvRatxqtBr0D2jZZDWpaxZEi6KMwTfwVmaHhzOCyB44Yd6595zLe3cY4y9hHbfIa/IOa4VpFgVsYb6BQeewUiZk2MNTjekfg0eraoJZnPzA/BQzVcbn6EbfXWlvcoPVqG8H/bKAouHM1z3CFA7xWmL8hmO0Q+0CLiJ9ZECOFxxgImhLuIr0SywGbRL7eP7mURlQsI/loGfYDiy2r4PrEb1JATk+0MN0VNvGEd4r+pIDCt5jN3CQUI/hfS1NrYEWw3/yr+B/BTw06DsoO9yUth0p27bR4LBj1MQnwB2aS1VuVgwAAAAASUVORK5CYII=" alt="" height="15" width="20" />    info@finik-tech.com</p>
						</li>

					</ul>
				</div>


			</div>
			<div className="flex py-4 flex-col justify-center items-center text-center  pb-5 bg-gray-50 dark:bg-[#1c1c1c] ">
				<h1 className=" text-gray-800 dark:text-white font-semibold dark:bg-[#1c1c1c]">©All rights reserved.  PT. Finik Teknologi Solusi t 2022</h1>
			</div>
		</div>
	)
}
export default Footer
