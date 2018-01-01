import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import {sortPostsByDate} from './posts_by_date';

describe('SortPostsByDateSelector', function() {
  let testPosts;
  let result;

  beforeEach(function() {
    testPosts = {
      1: {
        "id": 1,
        "title":"Blog post #1",
        "author": "Melissa Manges",
        "publish_date": "2016-04-23",
        "slug": "blog-post-1",
        "description": "Utroque denique invenire et has.",
        "content": "<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>"
      }, 2 : {
        "id": 2,
        "title":"Blog post #2",
        "author": "Olene Ogan",
        "publish_date": "2016-03-16",
        "slug": "blog-post-2",
        "description": "Ex legere perpetua electram vim, per nisl inermis quaestio ea.",
        "content": "<p>Ex legere perpetua electram vim, per nisl inermis quaestio ea. Everti adolescens ut nec. Quod labitur assueverit vis at, sea an erat modus delicata.</p> <p>Dico omnesque epicurei te vix. Tota verterem temporibus eu quo, eu iudicabit repudiandae sea. Elitr nihil gloriatur vis in.</p>"
      }, 3: {
        "id": 3,
        "title":"Blog post #3",
        "author": "Annemarie Axelrod",
        "publish_date": "2016-03-28",
        "slug": "blog-post-3",
        "description": "Sea ne harum reformidans conclusionemque.",
        "content": "<p>Sea ne harum reformidans conclusionemque. Eu eirmod adversarium definitiones pri, id brute option convenire sed.</p> <p>Id per porro tritani, mei ut assum persius prompta. Nominavi eligendi cu mea. Utinam consul theophrastus te sit, denique platonem assentior te pri. Nam id enim case iracundia.</p>"
      }
    };

    result = sortPostsByDate(testPosts);
  });

  it('sorts posts by date and retains linkage of date to id.', function() {
    expect(result[0][0]).toBe('2');
    expect(result[1][0]).toBe('3');
    expect(result[2][0]).toBe('1');
  });
});
