import { $params, $path } from 'remix-routes';

import { Routes } from 'remix-routes';
import { redirect as remixRedirect } from "@remix-run/node";

function redirect<R extends keyof Routes, P extends Routes[R]["params"], Q extends Routes[R]["query"]> (route: R, params: P, query?: Q) {
  return remixRedirect(
      $path(route as any, params, query)
    );
}

redirect("/:lang?/about", { lang: 1 });

$path('/posts/:id', { id: 1 }, { view: 'list', sort: 'price' });

$path('/', { foo: 'bar' });
