import React from "react";

import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import ToVisitList from "../components/ToVisitList";
import VisitedList from "../components/VisitedList";

import { QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  console.log(Auth.loggedIn())

  // Check if data is returning from the `QUERY_ME` query
  const { loading, data } = useQuery(QUERY_ME);
  // console.log(data)
  const profile = data?.me || {};
  // console.log(profile)

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!profile?.name) {
  //   return (
  //     <div>
  //     <Header />
  //     <h4>
  //       You need to be logged in to see your profile page. Use the navigation
  //       links above to sign up or log in!
  //     </h4>
  //     </div>
  //   );
  // }

  return (
    <section>
      <Header />
      <div>
        <h2 className="">Welcome </h2>
        <div>
          <ToVisitList toVisitResults={profile.tovisit} />
        </div>
        <div>
          <VisitedList visitedResults={profile.visited} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
