import React from 'react';
import faker from 'faker';

export default function comment() {
    return (
        <div>
            <div className = "comment">
        <a href="/" className = "avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">

        <span className="date"> Today at 6:00 pm</span>
        </div>
        <div className="text">Nice blog post!</div>

      </div>
      </div>
        </div>
    )
}
