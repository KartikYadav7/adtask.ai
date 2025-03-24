import  { Button2 } from "./Button"
const CardTestimonial = ({title, text }) =>{
    return (
        <div className="border rounded-lg w-full h-full p-2 text-gray-400">
        <p>{ text}</p>
        <p className="mt-2 text-white">{title}</p>
      </div>
    )

}
const Testimonial = () => {
  return (
    <>
    <div className="flex flex-col justify-center align-center text-center mx-auto">
        <Button2 name ="Testimonial" className={`mx-auto my-8`}/>

        <p className="text-3xl my-1 md:text-5xl">Trusted by</p>
        <p className="text-2xl text-violet-400 mb-4 md:text-4xl">Satisfied Clients</p>
        <p>Discover how we’ve driven growth and innovation.</p>
    </div>

    <div className="grid grid-rows-2 grid-cols-1 gap-6 mx-12 my-4 mb-20 md:grid-cols-3 md:grid-rows-2  ">

        <CardTestimonial 
        text ="“We used to struggle with consistent branding across platforms.
          adTask’s unified dashboard ensures our message stays on point every
          single time.”"
          title ="-Brand Director at a Tech Startup"/>

          <CardTestimonial
          text="“adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!”"
          title="–Head of Growth at Tech Startup"/>

          <CardTestimonial 
          text="“We’ve tried other platforms before, but none delivered the depth of
            insights adTask offers. Our conversion rates are up by 35% since we
            signed on!”"
          title="–Ecommerce Manager at Home Décor Brand"/>

          <CardTestimonial
          text="“What impressed me most was the real-time optimization. adTask’s
            intelligent agents just keep refining our campaigns—our ad spend has
            never worked harder!”"
          title="– Digital Strategist at SaaS Company"/>

<CardTestimonial
          text=" “adTask made everything from campaign setup to performance tracking
            simple. Our team can now focus on creating great content rather than
            crunching numbers.”"
          title=" – Social Media Lead at Non-Profit Organization"/>

<CardTestimonial
          text=" “We’ve seen a 50% boost in engagement across our social channels
            since switching to adTask. Its AI-driven insights are
            game-changing!”"
          title="– Social Media Manager at a Fitness Brand"/>
    </div>
      
    </>
  )
}

export default Testimonial
