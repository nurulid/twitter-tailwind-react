import React from "react";
import LogoHead from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import NewTweetTrigger from "./NewTweetTrigger";
import TopStickyBar from "./TopStickyBar";
import NewTweet from "./NewTweet";
import TweetTimelines from "./TweetTimelines";
import TopStickyBarSearch from "./TopStickyBarSearch";
import MoreBoxTrends from "./MoreBoxTrends";
import MoreBoxFollow from "./MoreBoxFollow";

const Home = () => {
  return (
    <div>
      <div className="flex">
        {/* left */}
        <section className="left-sidebar w-1/4 hidden sm:block">
          <header className="fixed h-full">
            <div className="flex md:pl-10 lg:pl-16 pr-4 py-3 flex-col h-full">
              {/* twitter logo */}
              <LogoHead />
              {/* navigation */}
              <Navigation />
              {/* new tweet button */}
              <NewTweetTrigger />
              {/* user menu */}
              <UserMenu />
            </div>
          </header>
        </section>

        {/* center */}
        <section className="w-full sm:w-2/4 border-l border-r border-solid border-gray-800 h-full">
          {/* top sticky bar */}
          <TopStickyBar />
          {/* new tweet */}
          <NewTweet />
          {/* tweet list */}
          <TweetTimelines />
        </section>

        {/* right */}
        <section className="right-sidebar w-1/4 hidden sm:block">
          {/* top sticky bar search */}
          <TopStickyBarSearch/>
          {/* Trends For You */}
          <MoreBoxTrends/>
          {/* Who To Follow */}
          <MoreBoxFollow/>
        </section>
      </div>
    </div>
  );
};

export default Home;
