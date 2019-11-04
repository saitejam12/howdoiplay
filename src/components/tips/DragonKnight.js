import React from "react";

const DragonKnight = () => {
  return (
    <div class="hero hero-dragon-knight" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbADADAREAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAABwgFBgkDBP/EADEQAAAFAwMCAwYHAQAAAAAAAAECAwQFAAYRBxIxFCETIlEyQWFxkbEkMzRCUlNiof/EABkBAAMBAQEAAAAAAAAAAAAAAAUGBwMEAv/EAC0RAAEEAQIEBAUFAAAAAAAAAAEAAgMEEQUhBhITMSIyUWE0QXGBoQcUIzNC/9oADAMBAAIRAxEAPwDmfpBAQMpA3RIyEchJPY0S+ERXghB2+YP+0l6vPNEAWHCoXCNSpamLbAz6JKcWVZ8qVE5Y8I4wFDJ2o8/TbQGHiOVhw8ZVPtfpdXsM56z8ey+iE0iC4JZvEWvILKu1x7FcFHYX5mwWjUGvRP77KfarwlZ00+LdINoysnp7eEnaTxIrgpUumeGQ84APqH0rk1XDx1GnBTDw/wBOaD9tInzTSegnc3d1tLETQUexhlCCb+wodvsFSvVaMrGse53++66PFBOG+iH9doNpDu7acIJmTF8yyuYfePrVl0abqQD2Sprm9pxRUihBWe5u+BikSpuh/CyTf+G0CY+40LtTumrxvzkFZ6DyQXHYCzFhwJpZm6nZVcWFsw/612Pbeb3JE9RGl24wjsNyqbDxA+uORp3W56xajPbPgIS19PI9KLkpxsLh7IgXKyaGO3m9Rolw3ojLBMsm4B/KmvFfE1jqcvN4iojRu+eYSounj9yZ6ZXJ1jDneIDwOabLFJjtiNkO0+2JogCcO9VQVh602u2nDXFczd61uVm26dk3Q/JcmHG0T4+NKWp6FLKBGzBizn3CJDWpeqGS+cbD3W0zGuVxpy8GFz221mLfMG7asUeDcFAfgFGaWkuii52H7Lh1XWGGx0cdvn7qcr4vRIdRpl2iuInlibnxfd42ea2raXy02sHZvb6IfDeDLWT80rPbncjY0PDormRjGpgcGQLwssIl7m+o0BhiJlfkpzrWGv3TNdsc0uy37W1BjikWbtY/oZlIByZJQofuCjXDT+gXQH1yEkcVVuZ3WH3USzDBFaTcoG9hwuYA/wA5HsNMM+QchCaMuML0iIJ+vNRkf0IquGq5PEVHgye7nNcTYjJnHYpiu3WN6bj5h+VesrERty2ynClj25X/AE6ZUHJsACQ7e4iNddqzHTrAE7/JK1aKXULziPXdctpURNcrw5hEx+oDzjzXuD4cfRayf3H6qw7IIRfSq7hXIRYUBIKInDdsHy+znikW9tbZhPWk+Ryz2kzlwa1b+QMusZDpyj4ImHZnZzt4o9RH87UN1z4ZyBpgA65QcBnebvTFIkiEpn07KU7hQ5ylOcEOxxDI81lVGGuW19xJYnS+TmbWk3FsYzcVEfOKflEfniprbe5+oDmOVUdBiY2HIA7L/9k="
                data-src="./assets/media/heroes/large/dragon_knight.jpg"
                alt="Dragon Knight"
              />
            </span>
          </span>
        </span>
        <span class="name">Dragon Knight</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            Breathe Fire's damage reduction component is a big deal in team
            fights, especially since it reduces total attack damage including
            +dmg items. Don't save it for kill stealing, use it early on in a
            fight.
          </li>
          <li>
            Dragon Form's Corrosive Breath damage over time works on towers.
            This is what makes DK such a mean pusher early on.
          </li>
          <li>
            Despite visually showing the debuff effect, illusions in Elder
            Dragon Form do <i>not</i> apply Corrosive Breath damage.
          </li>
          <li>
            The transformation into Dragon Form is nearly as useful as the
            Dragon Form itself during the laning phase. No one ever expects you
            to suddenly go full Dragon and whip out a ranged stun in the span of
            no seconds. People know how far to stand away from a DK in Knight
            form and people know to stand much further back from a DK in Dragon
            form. Don't give them the chance to adapt.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Silver Edge Breaks DK's Dragon Blood passive. Most DK's skimp on
            survivability since they can rely on this spell for tankiness, so
            Silver Edge can go a long way for killing DKs.
          </li>
          <li>
            So can heroes with Break abilities like Viper's Nethertoxin and Nyx
            Assassin's Vendetta.
          </li>
          <li>
            Spirit Vessel can also help to reduce the amount of HP Dragon Knight
            passively heals from Dragon Blood.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DragonKnight;
