import React from 'react';
import { t } from 'src/i18n';
import { Page } from 'src/state';
import styled, { NON_LARGE_DEVICES } from 'src/styling';

import Marker from './assets/marker';
import { AppContext } from './context';
import Footer from './footer';

const OTHER_MAPS = {
  france: 'https://covid-entraide.fr/trouve-ton-groupe-local/',
  nyc: 'https://mutualaid.nyc/groups/',
  uk: 'https://mutualaid.wiki/',
};

interface Props {
  className?: string;
  page: Page;
  setPage: (page: Page) => void;
}

const About = ({ className, page, setPage }: Props) => (
  <AppContext.Consumer>
    {({ lang }) => (
      <div className={`${className} page-${page.page}`}>
        <div className="content">
          <h2>{t(lang, s => s.aboutScreen.intro)}</h2>
          <p>{t(lang, s => s.aboutScreen.info)}</p>
          <p className="muted">
            {t(lang, s => s.aboutScreen.project, {
              reach4Help: key => (
                <a key={key} href="https://reach4help.org">
                  reach4help.org
                </a>
              ),
              githubSource: key => (
                <a
                  key={key}
                  href="https://github.com/reach4help/reach4help/tree/master/map"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(lang, s => s.aboutScreen.githubSourceLabel)}
                </a>
              ),
              email: key => (
                <a key={key} href="mailto:map@reach4help.org">
                  map@reach4help.org
                </a>
              ),
            })}
          </p>
          <button
            type="button"
            className="view-map"
            onClick={() => setPage({ page: 'map' })}
          >
            {t(lang, s => s.menu.map)}
          </button>
          <div className="other-maps">
            <p className="heading">
              {t(lang, s => s.aboutScreen.otherAreasHeading)}
            </p>
            <p className="info">{t(lang, s => s.aboutScreen.otherAreasInfo)}</p>
            <ul>
              {Object.entries(OTHER_MAPS).map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Marker />
                    {t(
                      lang,
                      s =>
                        s.aboutScreen.otherAreasLocations[
                          key as keyof typeof OTHER_MAPS
                        ],
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    )}
  </AppContext.Consumer>
);

export default styled(About)`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  background: url(/about-bg.svg);
  background-size: cover;
  background-position: center;
  position: absolute;
  top: ${p => p.theme.secondaryHeaderSizePx}px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  overflow-y: auto;

  &.page-about {
    opacity: 1;
    pointer-events: initial;
  }

  > .content {
    margin: 120px auto 0;
    color: #fff;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${NON_LARGE_DEVICES} {
      margin-top: 50px;
    }

    > h2 {
      margin: 0 0 20px;
      max-width: 550px;
      font-weight: bold;
      font-size: 40px;
      line-height: 150%;

      ${NON_LARGE_DEVICES} {
        font-size: 25px;
        line-height: 35px;
      }
    }

    > p {
      font-size: 24px;
      line-height: 150%;
      margin: 0 0 30px;

      ${NON_LARGE_DEVICES} {
        font-size: 20px;
      }

      &.muted {
        font-size: 15px;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.8);

        ${NON_LARGE_DEVICES} {
          font-size: 14px;
        }

        a {
          color: #fff;
          font-weight: bold;
        }
      }
    }

    > .view-map {
      background: linear-gradient(167.22deg, #f27979 2.64%, #7d00a3 97.36%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      padding: 16px 63px;
      color: #fff;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      border: none;
      outline: none;
      cursor: pointer;

      ${NON_LARGE_DEVICES} {
        font-size: 18px;
        line-height: 21px;
        padding: 9px 40px;
      }

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    }

    > .other-maps {
      margin-top: 100px;
      font-size: 20px;
      line-height: 150%;

      ${NON_LARGE_DEVICES} {
        margin-top: 50px;
        font-size: 17px;
      }

      > .heading {
        margin: 0;
        font-weight: bold;
        color: ${p => p.theme.colors.brand.secondaryLight};
        text-transform: uppercase;
      }

      > .info {
        margin: 0;
      }

      ul {
        margin: 20px 0;
        padding: 0;
        list-style: none;
        display: flex;

        li {
          margin: 5px 30px;

          a {
            display: flex;
            align-items: center;
            font-weight: 500;
            color: #fff;

            svg {
              width: 23px;
              margin: 0 14px;
            }

            &:hover,
            &:focus {
              color: rgba(255, 255, 255, 0.7);
            }
          }
        }

        ${NON_LARGE_DEVICES} {
          flex-direction: column;
          align-items: center;

          li {
            margin: 5px 50px;
            a svg {
              margin: 0 14px 0 -37px;

              [dir='rtl'] & {
                margin: 0 -37px 0 14px;
              }
            }
          }
        }
      }
    }
  }
`;
