//your JS code here. If required.
const paths=["Cloud" ,"Desktop" ,"Video Sport" ,"Mobile" ,"Web"]

		const list=document.getElementById("list");
		paths.forEach((paths)=>{
			const li=document.createElement("li");
			li.textContent=`${paths} development`;
			list.appendChild(li);
		});
