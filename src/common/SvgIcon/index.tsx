import React, { useEffect, useState } from "react";
import { SvgIconProps } from "../types";

// Load SVG from public folder, convert fills/strokes to currentColor and inject inline
export const SvgIcon = ({ src, width = "24px", height = "24px", preserveColor = true, ...rest }: SvgIconProps) => {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = `${process.env.PUBLIC_URL}/img/svg/${src}`;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) return;

        // Ensure the svg element has the svg-icon class and explicit size
        let svgText = text.replace(/(<svg\b[^>]*)(>)/i, (match, p1, p2) => {
          let attrs = p1;
          if (!/class=/.test(attrs)) attrs += ' class="svg-icon"';
          // override or add width/height attributes
          attrs = attrs.replace(/\swidth="[^"]*"/i, "");
          attrs = attrs.replace(/\sheight="[^"]*"/i, "");
          attrs += ` width="${width}" height="${height}"`;
          // If we are forcing currentColor and svg doesn't already define fill/stroke,
          // add them to the <svg> so child paths inherit currentColor.
          if (!preserveColor) {
            if (!/\sfill=/.test(attrs)) attrs += ' fill="currentColor"';
            if (!/\sstroke=/.test(attrs)) attrs += ' stroke="currentColor"';
          }
          return attrs + p2;
        });

        // Optionally replace fill/stroke values (except 'none') to use currentColor so CSS color controls them
        if (!preserveColor) {
          svgText = svgText.replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"');
          svgText = svgText.replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"');
        }

        setSvg(svgText);
      })
      .catch(() => {
        // ignore fetch errors silently
      });

    return () => {
      cancelled = true;
    };
  }, [src, width, height, preserveColor]);

  // while loading, reserve space
  if (!svg) return <span className="svg-icon" style={{ width, height }} aria-hidden="true" {...rest} />;

  return (
    <span
      className="svg-icon"
      style={{ width, height, display: "inline-block" }}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
};
