import React from 'react';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App =() => {


  return (
    <div className="ui container comments">
      <CommentDetail name = "sam" date= "Today at 6:00 pm" text = "Nice blog post!" avatar = {faker.image.avatar()}  />
    </div>
  );
}

export default App;
