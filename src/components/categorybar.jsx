export default function Bar({category,id}){
return (
    <div id={id} className="relative w-full  px-4 py-4  flex items-center justify-center z-20">
        <div className="bg h-20 lg:h-40"/>
<h1 className="font-bold text-4xl md:text-6xl text-white z-50 text-center absolute">{category}</h1>
    </div>
)
}