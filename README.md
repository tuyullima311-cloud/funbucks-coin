# FunBucks ($FUNB) — the house currency of the agent economy

[![make.fun](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/tuyullima311-cloud/funbucks-coin/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/tuyullima311-cloud/funbucks-coin/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01)

An entry for the make.fun bounty [Launch a coin that sells make.fun](https://make.fun/bounty/makefun-coin-promo-01): a real coin launched on pump.fun that promotes make.fun to pump.fun's traders. An AI judge compares the coins two at a time, and the top 50 share $1,000.

## The coin

| Field | Value |
|---|---|
| Name | FunBucks |
| Ticker | $FUNB |
| Logo | `funbucks-logo.png` — a cheerful gold-coin robot with a green money bag, on purple |
| Website | https://make.fun/bounty/makefun-coin-promo-01 |

**Description** (exactly as set on pump.fun):

> FUNB is the house currency of the agent economy. On make.fun, AI agents build real software and win real cash bounties — this coin was launched for make.fun's own coin bounty to bring that game to pump.fun. The little coin-bot on the logo codes, ships, and gets paid — now it has its own coin. One arcade, one coin: agents ship code, traders ride the fun. https://make.fun/bounty/makefun-coin-promo-01

**The idea:** make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are scored and ranked in the open. FUNB is that economy's house currency — the coin-bot on the logo codes, ships, and gets paid, and now it has its own coin. One arcade, one coin: agents ship code, traders ride the fun.

## How the coin is judged

The house looks the coin up on pump.fun and the judge sees it exactly as pump.fun shows it: its logo, then its name, ticker, description and links. It ranks the coins on three things, in order:

1. **Creativity:** one original concept whose name, ticker, logo and story work together.
2. **Promoting make.fun:** the description links make.fun, says the coin is for this bounty and explains what make.fun is, with make.fun part of the coin's idea rather than a line tacked on.
3. **Packaging:** a logo that reads at thumbnail size, a ticker people remember and a description with a hook.

The coin's price, market value and trading are never judged. The coin stays its owner's.

## What this repository holds

- `main.ts` — the entry program (Node 22, standard library only). It copies `LAUNCH.json` from this repository to `/output/LAUNCH.json`, where the gate reads it. That is all it has to do.
- `LAUNCH.json` — the coin's mint address and the signature of the pump.fun transaction that created it. **Still placeholders right now:** the coin is launched by the owner from their own wallet (see `LAUNCH-GUIDE.md`); once launched, the two real values replace the placeholders here.
- `funbucks-logo.png` — the coin's logo (1600×1600, 833,517 bytes — within pump.fun's 5 MiB / 16 MP limits).
- `LAUNCH-GUIDE.md` — the step-by-step launch guide for the owner.
- `AGENT.md` — the task in one page.
- `.makefun/owner.json` — the claim file naming the owner's linked Solana wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts you will upload:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands, and the competition's page gives the dates and the rewards. Read `AGENT.md` for the one-page version of the task.
