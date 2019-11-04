import React from "react";

const Doom = () => {
  return (
    <div class="hero hero-doom" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAICAgICAgICAgICAgICAwQDAgIDBAUEBAQEBAUGBQUFBQUFBgYHBwgHBwYJCQoKCQkMDAwMDAwMDAwMDAwMDAz/2wBDAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbADADAREAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABgcFCAkDBP/EADIQAAAFAgQDBgQHAAAAAAAAAAECAwQFAAYHERIhEzFBFiIzUWGBCBRCcRcjMnKSwfH/xAAbAQACAgMBAAAAAAAAAAAAAAAEBQYHAgMIAf/EAC0RAAEEAAQDBwQDAAAAAAAAAAEAAgMEBRESMQYTIRQiMkFRcYEHIyRCUpGx/9oADAMBAAIRAxEAPwDJZK0FjBsQ2fSlPNVgCijHFqVkg7Pyw56RigZG+wb/AN0U06wk1troHpKo3RFKFYxk02WUYIGzMCPMeo9QoevT0PdJ6rRNc7ojKZj/ABCYuWCZGhODHMUfl4tmXmUuQBv67UTI3UsoJwxuQSKnFju1tXDEnXf1r2JDW2nZCpiCA0RmljmrUWQjrStcEkJ4zpJ4oGvhkKOxf4jUefI1m6uCGm+UZt2SqxU7MXHAwilti5VIwcCWQRUD6REd/wBIedFU7LX5tG6jeO0Hs0vOyRyFkK39LN4y0YM6ascAEeuCbgcw+dYOe6mxz5XZj/FHxD2mQCJvUL1ucOE4ty5hngrNLhhTAd80Nn3yj1D/ACtFe86cax4HbIqKnpl07PG64XBhtMoRq0wRMi6KBdbpIniJFHkJg8qYskAOlZWYNWbkknbfQI7UY0pFLGtKsX7Zn72aGvKFXIZ0kXQtH8gEodAqo8N4p+9ybXwV0rjvC/Lg5tHoRu1VIhrxWhnjuHmkDJEcAKbtA3MPUKnzI9pY+oVVSXBJnXnGRTZwpn2lnzr0W863QhpY4Krvc/zCAA56RCvcVaLNZwA72XQJXSqy1Z+nhPmoa68XLa7dzUymijP5CCSCpwAOJp23oTBKE0MDRJ/SHtYkwWHlu6GMOr4nL2xYWbqJJlJdSBmB40PBAPo296ZYu7kw8z0K04K51m0Y/wCQQbivhldGGk8rDXPGHYKqiKrJTmRVIdymKP2Gj4H62hw80DdhMby07haBQSinZJPvn3XNnv8Aurn+00dqPsuroSdLlR/HRJJOdaqJppkUMI6jlAAEferU4ScTCQVSPHrGtsNIHVJcpjCuTMxuQ9alDh3VCGPPM3UGHiOB66x396K8gkv7u90+Ph1APxMjDZBqKTMpuoDqCozxafwflTPgYZ4kPZW5+N0xl7Ww2XXMKy4EEoLH7xssh2zHeg+FJHOYQSm/1Cja2yCAAv/Z"
                data-src="./assets/media/heroes/large/doom_bringer.jpg"
                alt="Doom"
              />
            </span>
          </span>
        </span>
        <span class="name">Doom</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            You get bonus HP regeneration for the entire duration of a creep
            being consumed under Devour.
          </li>
          <li>
            Leaving Devour on autocast (which can be toggled by right clicking
            the spell icon or pressing alt+hotkey) allows you to steal abilities
            from neutral creeps. Toggle it off when you want to Devour a creep
            that has some useless spell so you don't replace whatever ability
            you already have consumed.
          </li>
          <li>
            Learn the abilities and auras of neutral creeps and figure out which
            ones best match your playstyle. Get a Hill Troll Priest from an easy
            camp early game for the mana aura, Centaur from a medium camp mid
            game for the Stomp, and an Alpha Wolf from a medium camp late game
            for the crits and aura. If you're jungling, try to get the big red
            Satyr for the HP regen or the blue Ogre for the Ice Armor.
          </li>
          <li>The ranged Satyr's purge can target and dispel allies.</li>
          <li>
            The Tornado from the Wildwing Ripper does not draw aggro when used
            on neutral creeps, allowing you to damage an entire stack or kill
            ancients without them moving around constantly.
          </li>
          <li>
            If enemies are picking up Linken's, find a neutral spell that is
            targeted to pop them before casting Doom. The longest range targeted
            neutral spell is the Harpy's Chain Lightning (900 range), and the
            Mud Golem's Hurl Boulder is a close second (800 range).
          </li>
          <li>You can Devour creeps that are Glyphed.</li>
          <li>
            You can Devour Necronomicon units, but you won't get their
            abilities.
          </li>
          <li>
            The Scorched Earth movespeed bonus also applies to units under your
            control that are in the AoE.
          </li>
          <li>
            <b>DOOOOOOOOOOOOOM</b> Mutes activation/usage of items. Agh's
            upgraded <b>DOOOOOOOOOOOOOM</b> also applies a Break on the target.
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>
            Pay attention to what creep ability Doom has by clicking on him.
            Don't get surprised when his team rushes out of nowhere because he
            has the Kobold aura or if he breaks your channel because he took a
            Centaur Stomp.
          </li>
          <li>
            Linken's Sphere is the textbook anti-Doom item. Lotus Orb is also
            good for offensive situations.
          </li>
          <li>
            Spirit Vessel can significantly reduce the regen he gets from
            Devour.
          </li>
          <li>
            Please deny your allies when they're Doomed. I'm not walking near
            you because I want you to tell my wife I love her, I need you to
            kill me.
          </li>
          <li>
            However, you ideally want to click on your ally and track how much
            time is left on the Doom debuff icon because deny range != dead
            range.
          </li>
          <li>
            <b>DOOOOOOOOOOOOOM</b> Mutes activation/usage of items, including
            that Magic Wand that I know you want to use so badly because it
            should be enough to just barely sav... you're dead.
          </li>
          <li>
            If you get Doomed with an a Armlet toggled on you can backpack it to
            stop the drain.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Doom;
