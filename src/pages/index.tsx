import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import TodoInput from '@/components/todos/TodoInput';
import { TodoList } from '@/components/todos/TodoList';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout mt-10 flex min-h-screen flex-col items-center justify-start text-center'>
            <h1 className='mt-4 underline'>ToDo Next</h1>
            <h4 className='mt-4'>Let's list them down</h4>

            <div className='h-50 w-full'>
              <TodoInput />
              <hr className='my-2 h-1' />
              <TodoList />
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/Shrest4647/'>
                Sunil Shrestha
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
