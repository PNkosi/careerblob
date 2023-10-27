import { features } from "@/lib/components-static-data"
import Image from "next/image"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const Features = () => {
  return (
    <section className="relative container py-12">
        <Image className="absolute -z-10 -left-24 md:-left-36 md:w-[400px]" src='/mobile-left-illustration.svg' alt="illustration" width={316.314} height={332.773} />
        <h2 className="text-white">Why <RoughNotation type="box" color="#3FE1DD" strokeWidth={3} show={true}>choose</RoughNotation>  careerblob?</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            { features.map(({ icon, title, description }, index) => (
                <div key={index} className="group transition-all flex flex-col items-center gap-6 bg-[#372490]/50 backdrop-blur-lg hover:bg-[#0c0444]/50 p-4 rounded-lg">
                    {icon}
                    <h3 className="text-white text-center">{title}</h3>
                    <p className="hidden md:block text-sm text-center text-light-purple leading-[2]">{description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Features