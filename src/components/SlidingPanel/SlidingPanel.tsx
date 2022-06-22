import React from 'react'
import "./SlidingPanel.css";

export interface ISlidingPanel {
  children: React.ReactNode;
  text: string;
  direction?: "top" | "bottom" | "left" | "right";
  w?: string;
  h?: string;
  bg?: string
}

const SlidingPanel = ({children, text, direction, w='300px', h='200px', bg="#FF4785" }: ISlidingPanel) => {

     let css_direction_class = 'gau_slide-left'
     if (direction === 'right')  css_direction_class = 'gau_slide-right'
     else if (direction === 'top')  css_direction_class = 'gau_slide-top'
     else if (direction === 'left') css_direction_class = 'gau_slide-left'
     else if (direction === 'bottom') css_direction_class = 'gau_slide-bottom'

  return (
    <div>
      <div className="content">
        <section>
          <h4>Slide from Top</h4>
          <div className={`gau_slide ${css_direction_class}`}>
            <div className="gau_slide-content">{text}</div>
            <div style={{width: `${w}`, height: `${h}`, background: `${bg}`}}>
                {children}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SlidingPanel;
