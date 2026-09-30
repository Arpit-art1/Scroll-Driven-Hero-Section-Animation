import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CarExperience() {
    const sectionRef = useRef(null);

    // Main visual
    const carRef = useRef(null);
    const ringRef = useRef(null);

    // Progress
    const progressRef = useRef(null);

    // Content
    const introRef = useRef(null);
    const performanceRef = useRef(null);
    const speedRef = useRef(null);
    const technologyRef = useRef(null);
    const designRef = useRef(null);
    const finalRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            /*
            =====================================================
            INITIAL LOAD ANIMATION
            =====================================================
            */

            const introAnimation = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            introAnimation
                .from(".brand", {
                    opacity: 0,
                    y: -15,
                    duration: 0.5,
                })
                .from(".intro-label", {
                    opacity: 0,
                    y: 25,
                    duration: 0.5,
                })
                .from(".intro-title span", {
                    opacity: 0,
                    y: 60,
                    rotateX: 40,
                    duration: 0.8,
                    stagger: 0.08,
                })
                .from(
                    ".intro-description",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                    },
                    "-=0.35"
                )
                .from(
                    ".scroll-indicator",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                    },
                    "-=0.2"
                );

            /*
            =====================================================
            INITIAL STATES FOR SCROLL CONTENT
            =====================================================
            */

            gsap.set(
                [
                    performanceRef.current,
                    speedRef.current,
                    technologyRef.current,
                    designRef.current,
                    finalRef.current,
                ],
                {
                    opacity: 0,
                    y: 60,
                }
            );

            /*
            =====================================================
            MAIN SCROLL TIMELINE
            =====================================================
            */

            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,

                    // Start when hero reaches top
                    start: "top top",

                    // Long scroll experience
                    end: "+=5000",

                    // Pin the entire hero
                    pin: true,

                    // Smooth connection between scroll and animation
                    scrub: 2,

                    // Helps prevent sudden jumps when pinning
                    anticipatePin: 1,

                    invalidateOnRefresh: true,

                    onUpdate: (self) => {
                        if (progressRef.current) {
                            progressRef.current.style.transform =
                                `scaleX(${self.progress})`;
                        }
                    },
                },
            });

            /*
            =====================================================
            INTRO
            =====================================================
            */

            scrollTimeline.to(
                introRef.current,
                {
                    opacity: 0,
                    y: -80,
                    duration: 0.7,
                    ease: "power2.inOut",
                },
                0.35
            );

            /*
            =====================================================
            ⭐ MAIN CAR MOVEMENT ⭐

            THIS IS ONE CONTINUOUS MOVEMENT.

            The car does NOT jump between positions.

            It starts near the top and continuously moves
            toward the bottom as the user scrolls.
            =====================================================
            */

            scrollTimeline.to(
                carRef.current,
                {
                    y: "70vh",
                    scale: 0.68,
                    rotate: 0,

                    // IMPORTANT:
                    // No easing because movement is controlled
                    // directly by scroll progress.
                    ease: "none",

                    duration: 5,
                },
                0
            );

            /*
            =====================================================
            RING / CIRCLE TRANSITION
            =====================================================
            */

            scrollTimeline.fromTo(
                ringRef.current,
                {
                    scale: 0.7,
                    opacity: 0,
                },
                {
                    scale: 4.5,
                    opacity: 0.35,
                    rotation: 240,
                    duration: 5,
                    ease: "none",
                },
                0
            );

            /*
            =====================================================
            PERFORMANCE
            =====================================================
            */

            scrollTimeline.fromTo(
                performanceRef.current,
                {
                    opacity: 0,
                    x: -100,
                    y: 60,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                0.75
            );

            scrollTimeline.to(
                performanceRef.current,
                {
                    opacity: 0,
                    x: -80,
                    y: -50,
                    duration: 0.45,
                    ease: "power2.in",
                },
                1.65
            );

            /*
            =====================================================
            SPEED
            =====================================================
            */

            scrollTimeline.fromTo(
                speedRef.current,
                {
                    opacity: 0,
                    x: 100,
                    y: 60,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                1.9
            );

            scrollTimeline.to(
                speedRef.current,
                {
                    opacity: 0,
                    x: 80,
                    y: -50,
                    duration: 0.45,
                    ease: "power2.in",
                },
                2.75
            );

            /*
            =====================================================
            TECHNOLOGY
            =====================================================
            */

            scrollTimeline.fromTo(
                technologyRef.current,
                {
                    opacity: 0,
                    x: -100,
                    y: 60,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                3
            );

            scrollTimeline.to(
                technologyRef.current,
                {
                    opacity: 0,
                    x: -80,
                    y: -50,
                    duration: 0.45,
                    ease: "power2.in",
                },
                3.8
            );

            /*
            =====================================================
            DESIGN
            =====================================================
            */

            scrollTimeline.fromTo(
                designRef.current,
                {
                    opacity: 0,
                    x: 100,
                    y: 60,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                4
            );

            scrollTimeline.to(
                designRef.current,
                {
                    opacity: 0,
                    x: 80,
                    y: -50,
                    duration: 0.45,
                    ease: "power2.in",
                },
                4.65
            );

            /*
            =====================================================
            FINAL SCENE
            =====================================================
            */

            scrollTimeline.to(
                finalRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                },
                4.65
            );

            /*
            =====================================================
            FINAL CAR POSITION
            =====================================================

            The car has already travelled continuously from
            top → bottom.

            We only slightly scale it here near the end.
            =====================================================
            */

            scrollTimeline.to(
                carRef.current,
                {
                    scale: 0.78,
                    rotate: 0,
                    duration: 0.35,
                    ease: "power2.out",
                },
                4.68
            );

            /*
            =====================================================
            REFRESH
            =====================================================
            */

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen overflow-hidden bg-[#050505] text-white"
        >
            {/* =================================================
          BACKGROUND
      ================================================= */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#252525_0%,#0b0b0b_45%,#020202_100%)]" />

            {/* Subtle grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* =================================================
          TOP PROGRESS BAR
      ================================================= */}

            <div className="absolute left-0 top-0 z-[100] h-[2px] w-full bg-white/10">
                <div
                    ref={progressRef}
                    className="h-full w-full origin-left scale-x-0 bg-white"
                />
            </div>

            {/* =================================================
          BRAND
      ================================================= */}

            <div className="brand absolute left-6 top-7 z-[100] md:left-12 md:top-9">
                <p className="text-[10px] font-medium tracking-[0.45em] text-white/50 md:text-xs">
                    ITZ FIZZ
                </p>
            </div>

            {/* =================================================
          MAIN HERO
      ================================================= */}

            <div className="relative z-10 h-full w-full">

                {/* =================================================
            INTRO TEXT
        ================================================= */}

                <div
                    ref={introRef}
                    className="absolute left-6 top-[17%] z-40 md:left-[9%] md:top-[18%]"
                >
                    <p className="intro-label mb-5 text-[10px] tracking-[0.5em] text-white/40 md:text-xs">
                        A NEW EXPERIENCE
                    </p>

                    <h1 className="intro-title flex flex-col text-4xl font-semibold tracking-[0.16em] md:text-6xl lg:text-8xl">
                        <span>W E L C O M E</span>
                        <span>I T Z F I Z Z</span>
                    </h1>

                    <p className="intro-description mt-5 max-w-sm text-sm leading-7 text-white/40">
                        Scroll to explore performance, technology
                        and design.
                    </p>
                </div>

                {/* =================================================
            CAR

            IMPORTANT:
            top-[5%] means the car starts near the
            upper part of the screen.

            GSAP then continuously moves it downward.
        ================================================= */}

                <div
                    ref={carRef}
                    className="absolute left-1/2 top-[-70%] z-30 w-[270px] -translate-x-1/2 md:w-[360px] lg:w-[430px]"
                >
                    {/* Car glow */}

                    <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/[0.08] blur-[100px]" />

                    <img
                        src="/car.png"
                        alt="Red concept car"
                        className="relative block w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/* =================================================
            EXPANDING RING
        ================================================= */}

                <div
                    ref={ringRef}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 md:h-[350px] md:w-[350px]"
                />

                {/* =================================================
            PERFORMANCE
        ================================================= */}

                <InfoCard
                    innerRef={performanceRef}
                    side="left"
                    label="PERFORMANCE"
                    value="98%"
                    description="Engineered for a smoother and more responsive driving experience."
                />

                {/* =================================================
            SPEED
        ================================================= */}

                <InfoCard
                    innerRef={speedRef}
                    side="right"
                    label="SPEED"
                    value="3.8s"
                    description="Instant response designed around precision and movement."
                />

                {/* =================================================
            TECHNOLOGY
        ================================================= */}

                <InfoCard
                    innerRef={technologyRef}
                    side="left"
                    label="TECHNOLOGY"
                    value="AI"
                    description="Intelligent systems designed to adapt to every interaction."
                />

                {/* =================================================
            DESIGN
        ================================================= */}

                <InfoCard
                    innerRef={designRef}
                    side="right"
                    label="DESIGN"
                    value="360°"
                    description="Every angle is designed around balance, detail and character."
                />

                {/* =================================================
            FINAL CONTENT
        ================================================= */}

                <div
                    ref={finalRef}
                    className="absolute left-1/2 top-[14%] z-50 w-[90%] -translate-x-1/2 text-center"
                >
                    <p className="mb-5 text-[10px] tracking-[0.5em] text-white/40 md:text-xs">
                        THE EXPERIENCE
                    </p>

                    <h2 className="text-4xl font-semibold tracking-[0.14em] md:text-6xl lg:text-7xl">
                        BUILT FOR
                        <br />
                        THE FUTURE
                    </h2>

                    <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/40">
                        Performance, technology and design brought
                        together through one continuous experience.
                    </p>
                </div>

                {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

                <div className="scroll-indicator absolute bottom-7 left-1/2 z-[100] -translate-x-1/2 text-center">
                    <p className="text-[9px] tracking-[0.5em] text-white/40">
                        SCROLL TO EXPLORE
                    </p>

                    <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-white/70 to-transparent" />
                </div>
            </div>
        </section>
    );
}


/*
===========================================================
INFO CARD COMPONENT
===========================================================
*/

function InfoCard({
    innerRef,
    side,
    label,
    value,
    description,
}) {
    const position =
        side === "left"
            ? "left-6 md:left-[9%]"
            : "right-6 md:right-[9%]";

    return (
        <div
            ref={innerRef}
            className={`absolute ${position} top-1/2 z-40 w-62.5 -translate-y-1/2 md:w-[330px]`}
        >
            <div className="border-l border-white/20 pl-5 md:pl-7">

                <p className="text-[10px] tracking-[0.45em] text-white/40 md:text-xs">
                    {label}
                </p>

                <p className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
                    {value}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/40">
                    {description}
                </p>

            </div>
        </div>
    );
}