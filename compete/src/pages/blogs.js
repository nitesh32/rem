import React from 'react';

const Blogs = () => {
return (
      <div class="cont">
      <h1> page under const</h1>
      </div>
);
};

export default Blogs;


function Test() {
      return (
        <div class="entry">
            <div class="dis">
              <h3>
                This is dumy text about the job links and about project. fgffh fgfh gshf dgffhg fgfh gfhhg dg gfghgs dgfxgrdfd dsgdhfgdrseg dghdfgtfsd redgsderd dfghffsd fg rfgfcg sgdfdfw werserd ferdxdfd rgerd
              </h3>
            </div>
            <a href="https://getcssscan.com/css-buttons-examples" target={"_blank"}>
              <button
                class="butt"
                value="opening your link in new tab"
                onClick={(e) => alert(e.target.value)}
              >
                <h1>click me</h1>
              </button>
            </a>
          </div>
      )
    }