import * as React from "react";
import { cn } from "@/lib/utils";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  imageSrc?: string;
  description?: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  members: TeamMember[];
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  ({ title, members, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-background py-32 md:py-40 lg:py-48",
          className
        )}
        {...props}
      >
        <div className="container grid items-center justify-center gap-16 px-4 text-center md:px-6">
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-muted-foreground"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {title}
            </h2>
          </div>

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-3xl bg-muted/30 backdrop-blur-sm p-8 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl border border-border/50"
              >
                {/* Background wave animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-orange-500/10 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                {/* Member Image with mask and border animation */}
                <div
                  className="relative z-10 h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-orange-500/30 bg-orange-500/10 transition-all duration-500 ease-out group-hover:border-orange-400/50 group-hover:scale-105 flex items-center justify-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {member.imageSrc ? (
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <svg
                      className="h-16 w-16 md:h-20 md:w-20 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>

                <h3 className="relative z-10 mt-6 text-2xl md:text-3xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="relative z-10 mt-2 text-lg md:text-xl text-orange-400">
                  {member.designation}
                </p>

                {member.description && (
                  <p className="relative z-10 mt-4 text-base md:text-lg text-muted-foreground max-w-md">
                    {member.description}
                  </p>
                )}

                {/* Social Links for individual members */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-6 flex gap-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-orange-400 transition-colors"
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
