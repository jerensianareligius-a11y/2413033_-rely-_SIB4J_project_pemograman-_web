export default function LearnPage() {
    return (
    <div className="bg-white h-screen flex text-blue-950">
        <div className="bg-purple-300 h-72 w-96 p-12 flex flex-col justify-between rounded-3xl">
             <div className="flex gap-4">
            <img src={"/palette.svg"} alt="icon palette" />
            <p>Design</p>
            </div>

            <div>
            <h1 className="text-4xl font-bold">Figma</h1>
            <p>8 Hours ago</p>
            </div>
        </div>

        <div className="bg-green-300 h-72 w-96 p-12 flex flex-col justify-between rounded-3xl">
             <div className="flex gap-4">
            <img src={"/palette.svg"} alt="icon palette" />
            <p>Design</p>
            </div>

            <div>
            <h1 className="text-4xl font-bold">Python</h1>
            <p>8 Hours ago</p>
            </div>
        </div>

        <div className="bg-pink-300 h-72 w-96 p-12 flex flex-col justify-between rounded-3xl">
             <div className="flex gap-4">
            <img src={"/palette.svg"} alt="icon palette" />
            <p>Design</p>
            </div>

            <div>
            <h1 className="text-4xl font-bold">Sketch</h1>
            <p>8 Hours ago</p>
            </div>
        </div>
    </div>
    );
}