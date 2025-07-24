import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import '../app/globals.css'
import FingerSwipe from "./ui/FingerSwipe"

export default function Services() {
  return (
    <section className="service w-full overflow-x-hidden px-4" id="service">
      <h2>
        Meus <span>Serviços</span>
      </h2>
      <Carousel opts={{
        align: "start",
      }}
        className="w-full  bg-zinc-700 rounded-lg">
          <CarouselContent className="">
            <CarouselItem className="flex-none w-full snap-start">
              <Card className="">
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bx-code"></i>
                    <h3>
                      Desenvolvimento Web <span>HTML, CSS E JS</span>
                    </h3>
                    <p>
                      Tenho conhecimento sobre desenvolvimento web utilizando as linguagens HTML, CSS e JavaScript.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="flex-none w-full snap-start">
              <Card>
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bxl-python"></i>
                    <h3>
                      Automação de serviços com <span>Python</span>
                    </h3>
                    <p>
                      Possuo conhecimento sobre automação em Python utilizando a biblioteca pyautogui.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="flex-none w-full snap-start">
              <Card>
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bxl-python"></i>
                    <h3 className="text center">
                      Criação de interfaces <span>em Python</span>
                    </h3>
                    <p className="text center m-6">
                      Criação de interfaces em Python utilizando a biblioteca PyQt5 e as ferramentas PyQt-tools e PyQt-designer.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="flex-none w-full snap-start">
              <Card>
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bxs-data"></i>
                    <h3>MySQL</h3>
                    <p>
                      Possuo conhecimento em MySQL para utilização em interfaces e armazenamento de dados.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem className="flex-none w-full snap-start">
              <Card>
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bxs-data"></i>
                    <h3>Node</h3>
                    <p>
                      Possuo conhecimento em Node para desenvolvimento web.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem >

            <CarouselItem className="flex-none w-full snap-start">
              <Card>
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bxs-data"></i>
                    <h3>React</h3>
                    <p>
                      Possuo conhecimento em React para desenvolvimento Front-End.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem >

            <CarouselItem className="flex-none w-full snap-start">
              <Card>
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bxs-data"></i>
                    <h3>Typescript</h3>
                    <p>
                      Possuo conhecimento em Typescript para desenvolvimento Back-End.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem >

            <CarouselItem className="flex-none w-full snap-start">
              <Card>
                <CardContent className="p-0">
                  <div className="services-box">
                    <i className="bx bxs-data"></i>
                    <h3>MongoDB</h3>
                    <p>
                      Possuo conhecimento no banco de dados MongoDB para armazenamento e requisição de dados.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem >
          </CarouselContent >
                <CarouselPrevious className=" hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full h-10 w-10 m-5" />
                <CarouselNext className=" hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full h-10 w-10 m-5" />
      </Carousel>
      <h2 className="text-center text-blue-500 md:hidden">
        Arrasta pro lado
              <FingerSwipe />
      </h2>
    </section >
  );
}
