import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend nunc sem, sit amet luctus tellus tempus tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      author: "HELEN MCDONALD",
      location: "NEW YORK",
    },
    {
      content:
        "Proin sagittis maximus accumsan. Maecenas tempor convallis ultrices. Cras a cursus sem. Suspendisse dignissim auctor commodo. Nulla facilisi. Maecenas vel laoreet enim.",
      author: "JOHN SMITH",
      location: "CHICAGO",
    },
    {
      content:
        "Fusce gravida at risus eget fringilla. Quisque vestibulum massa a quam fringilla varius. Aliquam cursus tellus quis odio facilisis, ut pulvinar elit finibus.",
      author: "SARAH WILSON",
      location: "LOS ANGELES",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Vertical line above the title */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>

        {/* Quote mark */}
        <div className="relative">
          <div className="absolute right-0 top-0 text-gray-100 text-[200px] font-serif leading-none z-0">
            &#8220;
          </div>

          {/* Testimonial content */}
          <div className="relative z-10 pb-16">
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
              {testimonials[currentTestimonial].content}
            </p>

            {/* Author info and navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
             
                <div>
                  <h4 className="font-bold text-xl">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex space-x-2">
                <Button
                  variant="default"
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700 h-12 w-12"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  className="bg-blue-600 hover:bg-blue-700 h-12 w-12"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
