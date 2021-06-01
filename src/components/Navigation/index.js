import React from 'react';
import {
    RoundLogo,
    GithubIcon,
    Wrapper,
    Bar,
    Page,
    GithubPage,
    SubpageLinks,
    SubpageLink,
    Label,
    Caret,
    HomeCaret,
    GithubCaret,
    LinkWrapper,
    GithubPageLinkWrapper,
    GithubPageLink
} from './NavigationElements';

const NavigationBar = ({ toggle }) => { return(<>

    {/* Wrapper for the navigation bar (for position control) */}
    <Wrapper>

        {/* [UL] Navigation bar implemented */}
        <Bar>

            {/* [LI] Tilted Games (logo) section */}
            <Page>
                {/* [IMG] */}
                <HomeCaret />
                {/* [IMG] */}
                <RoundLogo />
            </Page>

            {/* [LI] Recoup section */}
            <Page>
                {/* [DIV] (white vertical line) */}
                <LinkWrapper>

                    {/* [IMG] */}
                    <Caret />
                    {/* [LABEL] */}
                    <Label>Recoup</Label>

                    {/* [UL] Subpage links */}
                    <SubpageLinks>
                        {/* [LI] */}
                        <SubpageLink>
                            {/* [LABEL] */}
                            <Label>Concept Art</Label>
                        </SubpageLink>

                        {/* [LI] */}
                        <SubpageLink>
                            {/* [LABEL] */}
                            <Label>Download</Label>
                        </SubpageLink>
                    </SubpageLinks>

                </LinkWrapper>
            </Page>

            {/* [LI] Game server section */}
            <Page>
                {/* [DIV] (white vertical line) */}
                <LinkWrapper>

                    {/* [IMG] */}
                    <Caret />
                    {/* [LABEL] */}
                    <Label>Game server</Label>
                    {/* [UL] Subpage links */}

                    <SubpageLinks>
                        {/* [LI] */}
                        <SubpageLink>
                            {/* [LABEL] */}
                            <Label>Download</Label>
                        </SubpageLink>

                        {/* [LI] */}
                        <SubpageLink>
                            {/* [LABEL] */}
                            <Label>Help on Github</Label>
                        </SubpageLink>
                    </SubpageLinks>
                </LinkWrapper>
            </Page>

            {/* [LI] Contact section */}
            <Page>
                {/* [DIV] (white vertical line) */}
                <LinkWrapper style={{ paddingBottom: '30px' }}>

                    {/* [IMG] */}
                    <Caret />
                    {/* [LABEL] */}
                    <Label>Contact</Label>

                    {/* [UL] Subpage links */}
                    <SubpageLinks>
                        {/* [LI] */}
                        <SubpageLink>
                            {/* [LABEL] */}
                            <Label>Report a bug</Label>
                        </SubpageLink>
                    </SubpageLinks>

                </LinkWrapper>
            </Page>

            {/* [LI] Github section */}
            <GithubPage>
                {/* [UL] (animated white vertical line) */}
                <GithubPageLinkWrapper>

                    {/* [IMG] */}
                    <GithubCaret />
                    <a href='#' style={{ textDecoration: 'none' }}>
                        {/* [IMG] */}
                        <GithubIcon size={48} />
                    </a>

                    {/* [LI] */}
                    <GithubPageLink>
                        <a href='#' style={{ textDecoration: 'none' }}>
                            {/* [LABEL] */}
                            <Label>Recoup</Label>
                        </a>
                    </GithubPageLink>

                    {/* [LI] */}
                    <GithubPageLink>
                        <a href='#' style={{ textDecoration: 'none' }}>
                            {/* [LABEL] */}
                            <Label>Game Server</Label>
                        </a>
                    </GithubPageLink>

                    {/* [LI] */}
                    <GithubPageLink>
                        <a href='#' style={{ textDecoration: 'none' }}>
                            {/* [LABEL] */}
                            <Label>This Website</Label>
                        </a>
                    </GithubPageLink>

                </GithubPageLinkWrapper>
            </GithubPage>
        </Bar>
    </Wrapper>
</>);
};

export default NavigationBar;