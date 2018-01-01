import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {PostShowComponent} from './post_show_component';

describe('PostShowComponent', function() {
  let component;
  let testPost;

  beforeEach(function() {
    //I need a mock store, and I need to pass it into this function.
    const renderer = ReactTestUtils.createRenderer();
    testPost = {
                        id: 1,
                        title: "Blog post #1",
                        author: "Melissa Manges",
                        publish_date: "2016-02-23",
                        slug: "blog-post-1",
                        description: "Utroque denique invenire et has.",
                        content: "<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>"
               };

    renderer.render(<PostShowComponent post={testPost}/>);
    component = renderer.getRenderOutput();
  });

  it('is a div element', function() {
    //expect all things to be rendered.
    //expect it to be a list element.
    expect(component.type).toBe('div');
  });

  it('shows all of the information(have two children elements)', function() {
    //expect all things to be rendered.
    //I want it have the two other divs inside of it.
    console.log(component.props);
    expect(component.props.children.length).toBe(3);
  });
});
