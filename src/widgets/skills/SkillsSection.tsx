import { Fragment, useEffect, useRef, useState } from "react";
import { skillCategories } from "@/entities/skill/data/skills";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { preserveViewportPosition } from "@/shared/lib/preserveViewportPosition";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { SkillPanel } from "@/widgets/skills/SkillPanel";

const CLOSING_CLASS_DURATION = 1500;

export function SkillsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [closingId, setClosingId] = useState<string | null>(null);
  const closingTimer = useRef<number | null>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const isMobile = useMediaQuery("(max-width: 600px)");
  const canUseHover = useMediaQuery("(hover: hover) and (pointer: fine) and (min-width: 601px)");

  const markClosing = (id: string | null) => {
    if (closingTimer.current) window.clearTimeout(closingTimer.current);
    setClosingId(id);

    if (id) {
      closingTimer.current = window.setTimeout(() => setClosingId(null), CLOSING_CLASS_DURATION);
    }
  };

  const activate = (id: string) => {
    const tab = tabRefs.current.get(id) ?? null;

    preserveViewportPosition(tab, () => {
      if (activeId === id) {
        markClosing(id);
        setActiveId(null);
        return;
      }

      markClosing(activeId);
      setActiveId(id);
    });
  };

  const openFromHover = (id: string) => {
    if (!canUseHover || activeId === id) return;
    activate(id);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !activeId) return;
      const tab = tabRefs.current.get(activeId) ?? null;
      preserveViewportPosition(tab, () => {
        markClosing(activeId);
        setActiveId(null);
      });
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeId]);

  useEffect(
    () => () => {
      if (closingTimer.current) window.clearTimeout(closingTimer.current);
    },
    [],
  );

  const activeCategory = skillCategories.find((category) => category.id === activeId) ?? null;

  return (
    <section id="skills" className="section skills-section">
      <div className="section__inner">
        <SectionHeading number="01" title="Skills" />

        <div className="skills">
          <div className="skills-tabs" role="tablist" aria-label="Ámbitos de habilidades">
            {skillCategories.map((category) => {
              const isActive = category.id === activeId;
              const isClosing = category.id === closingId;

              return (
                <Fragment key={category.id}>
                  <button
                    ref={(element) => {
                      if (element) tabRefs.current.set(category.id, element);
                      else tabRefs.current.delete(category.id);
                    }}
                    className={`skills-tab${isActive ? " is-active" : ""}${isClosing ? " is-closing" : ""}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-expanded={isActive}
                    aria-controls={`skills-panel-${category.id}`}
                    onClick={() => activate(category.id)}
                    onMouseEnter={() => openFromHover(category.id)}
                  >
                    {category.label}
                  </button>

                  {isMobile && isActive && <SkillPanel category={category} />}
                </Fragment>
              );
            })}
          </div>

          <div className="skills-panels">
            {!isMobile && activeCategory && (
              <SkillPanel key={activeCategory.id} category={activeCategory} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
