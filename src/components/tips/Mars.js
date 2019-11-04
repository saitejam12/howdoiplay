import React from "react";

const Mars = () => {
  return (
    <div class="hero hero-mars" data-patch="684">
      <div class="herotitle">
        <span class="portrait">
          <span class="portrait-frame">
            <span class="portrait-frame-inner">
              <img
                class="portrait-img"
                width="256"
                height="144"
                src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABLAAD/4QNTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2RTZENzdDNDBFNDExRTlCMTczQUM5NUFDMTM4QTlCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2RTZENzdCNDBFNDExRTlCMTczQUM5NUFDMTM4QTlCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDQ1Y2ZhOTMtZjI2MC01YjRhLTgyMDMtZDU4ZDU1OTMyN2FkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDQ1Y2ZhOTMtZjI2MC01YjRhLTgyMDMtZDU4ZDU1OTMyN2FkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAwICAgICAwICAwUDAwMFBQQDAwQFBgUFBQUFBggGBwcHBwYICAkKCgoJCAwMDAwMDA4ODg4OEBAQEBAQEBAQEAEDBAQGBgYMCAgMEg4MDhIUEBAQEBQREBAQEBARERAQEBAQEBEQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ/8AAEQgAGwAwAwERAAIRAQMRAf/EAIoAAAMBAQEAAAAAAAAAAAAAAAYHCAUECQEAAgMBAAAAAAAAAAAAAAAABgcDBAUCEAABAwIEBAEICwAAAAAAAAABAgMEEQUAMRIGIRMUBzJBUYEiQiQVFnGh0VJicsIjM0NjEQABAwIFAwQDAQAAAAAAAAABAAIDEQQhMRIFBkGBE1EiMkJhcaEz/9oADAMBAAIRAxEAPwDzGsljkXaSnQKgnicULi4EYxRHte3OuJBRO7aG3/hkF1VOaWUcwqI9VNMqnAi+UyyVyTPv9Fra+EYkiqeXZzarW3oMvdzF9juXFsCSzbWjqLleJB82M3d7B05a0N7oe2vkL7WrSfaeiodZtO/O2A3HAtaXZyndUtmoIQ42K1AwDXFlOyUxNwrmiqy3qF87ZJTUD4qQu6e57XeoXy1CBEl2RrmLUnSG9HAJwcbDYy25Ln5AYKDku5Mvi1rEERLbHtzjscFL1OAcGXowctcXgHJAxhEZIzQHsqFDQ+hqbKRCZVm6sUpjMu3F2QqtXbgIGF1QP2qG2ozsZ21SrGbo0vrmFNF1B1KqcjQYHZnSM94GSj1PupqONa+mOC69h9sYO3Jb4vTklyI8PdpkNdFBJ+8k47i5BbyYOOkq5dcQvWDUxuppTZtdlhbctMNGzN1yHm0OrlP2x9opXUJJIKsiMdz3VsavaQXHBZUO2XbZA2RhAH4UxbilKn3edPlthLz7y1rIFKEnF23flQorkt26a0WQu5MNpKEJ9Ye1giiBKFbpwGASrkwpclCnJCilI4gZDErWtbkhSSaSU+4o07ablsG2bml9a/eFAJ/cyH0Ywt1spLmOgyRxxjdbawm1OFSfVPKzdzRIgOIckJJRq0moyzGF7cbG5rq0TssuSwSMILgt21d14q1Rw2AckrV5jl9eMmXZ3iuK2Yd1tZgAQCsTv1ZoAs1u3vtxoKZk6mZ6Wh4HR5VAZVwS8bc8AxyHEZJW8hLYpT48lNVyvrrbpFSk4acTMEobq5Jcu/dFdJyp/n4ftxWaqiBrh/Oj9Pi9GLUeSgkzCINra+vNOty/Bo9NcQzfHor9pXyfbsmVYuZ8ImU53iRTTo5mfs1wMXVNbfj/AFMDbtXjd8+nomTtvquim8n4h4U6+d0/QZf3cz2/y4wzppjp7aq9qdF1d6q/bvRTZ3A1/MEzXSus+DTpz8mnhhh2NPEEs77/AEK//9k="
                data-src="./assets/media/heroes/large/mars.jpg"
                alt="Mars"
              />
            </span>
          </span>
        </span>
        <span class="name">Mars</span>
      </div>
      <div class="tips">
        <h1>Tips</h1>
        <ul>
          <li>
            Spear of Mars provides 300 flying vision as it travels and the
            vision lingers around an impaled enemy.
          </li>
          <li>
            The Spear treats illusions just like actual heroes in terms of
            skewering behavior.
          </li>
          <li>
            Invisible units can get Speared, but you'll only get true sight on
            the target if they get impaled on something.
          </li>
          <li>
            Forced movement can shift enemies around after they get skewered,
            but as long as the Spear still connects to something, the enemy will
            still get stunned wherever they are.
          </li>
          <li>
            Earthshaker's Fissure, Tusk's Ice Shards, Clockwerk's Power Cogs,
            Nature's Prophet's Sprout, and obviously your own Arena of Blood's
            walls count as objects that you can pin an enemy to with your Spear
            to get the stun.
          </li>
          <li>
            Iron Branch trees also count, but the collision with the Spear isn't
            very consistent.
          </li>
          <li>
            The sides of Rosh's pit do not count as walls, only the back of his
            pit counts. However, there are a few trees surrounding his pit, so
            aim accordingly if you want to go for the skewering stun, or if you
            just want to send an enemy flying out of the pit.
          </li>
          <li>
            Only the primary target of the Spear that is skewered gets stunned.
            The knockback on other enemies in the path of the Spear does not
            count as a disable.
          </li>
          <li>
            The knockback on God's Rebuke does not count as a disable and will
            not cancel enemy channels.
          </li>
          <li>
            Damage from God's Rebuke can go through spell immunity, but the
            knockback won't.
          </li>
          <li>
            God's Rebuke performs a true strike instant attack on all targets in
            the AoE. This means each target has a chance to proc/apply attack
            modifiers, excluding cleave.
          </li>
          <li>
            Bulwark only reduces damage from attacks, not physical damage
            spells.
          </li>
          <li>
            Arena of Blood blocks attack projectiles from any enemy from
            entering the ring, even attacks from towers or the fountain.
          </li>
          <li>
            Here are the rules of engagement when dealing with the Arena of
            Blood:
            <ul>
              <li>Enemies can freely blink in or out of the Arena.</li>
              <li>
                Spell immunity allows enemies to pass freely through the Arena
                walls.
              </li>
              <li>
                Anything that affects an enemy's z-axis position (height off the
                ground) allows them to pass in or out of the Arena. Obviously
                this means flying units can pass through, but it also means
                spells like Mirana's Leap or Slark's Pounce also work.
              </li>
              <li>
                This also means if you Spear or Force Staff an enemy who's
                mid-bounce from spells like Impale or Ravage, they will yeet
                right out of the Arena.
              </li>
              <li>
                Spells that provide free pathing, like Spectre's Spectral Dagger
                or Centaur's Agh's Stampede, do <i>not</i> allow enemies to pass
                through the Arena.
              </li>
              <li>
                Allies can utilize forced movement spells on enemies to shove
                them in or out of the Arena, like with Keeper of the Light's
                Blinding Light or Pudge's Meat Hook.
              </li>
              <li>
                The Arena walls will attack invisible units regardless of
                detection.
              </li>
              <li>
                The wall's knockback is non-disabling, so you can't Force Staff
                a TP'ing enemy into the wall to cancel their channel.
              </li>
            </ul>
          </li>
        </ul>
        <h1>Counters</h1>
        <ul>
          <li>idk lol</li>
        </ul>
      </div>
    </div>
  );
};

export default Mars;
