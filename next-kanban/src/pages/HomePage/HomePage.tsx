'use client'

import { JSX } from 'react';
import { ProjectOutlined } from '@ant-design/icons';
import Tasks from '@/components/Tasks/Tasks';
import { columns, tasks } from '@/utils/fakeData';

const HomePage = (): JSX.Element => {
  return (
    <div className="app">
      <div className="header">
        <ProjectOutlined /> Kanban board
      </div>

      <Tasks tasks={tasks} columns={columns} />

      {/*
      <div className="footer">
        <a href="https://www.freepik.com/free-vector/round-avatars-set-with-faces-people-comic-portraits-happy-social-media-users_22676039.htm#query=avatar%20svg&position=45&from_view=keyword&track=ais">
          Image by studio4rt
        </a>{" "}
        on Freepik
      </div>
        */}
    </div>
  );
};
export default HomePage;
