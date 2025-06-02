<script>
    import {
        Footer,
        FooterBrand,
        FooterCopyright,
        FooterIcon,
        FooterLink,
        FooterLinkGroup
    } from "flowbite-svelte";
    import { DiscordSolid, FacebookSolid, GithubSolid, TwitterSolid } from "flowbite-svelte-icons";
</script>

<Footer footerType="socialmedia">
    <div class="container mx-auto md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <FooterBrand href="/" name="Wenke" />
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                </h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                </h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                </h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
    <div class="container mx-auto sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="Flowbite™" />
        <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
            <FooterIcon href="/">
                <FacebookSolid
                    class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                />
            </FooterIcon>
            <FooterIcon href="/">
                <DiscordSolid
                    class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                />
            </FooterIcon>
            <FooterIcon href="/">
                <TwitterSolid
                    class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                />
            </FooterIcon>
            <FooterIcon href="/">
                <GithubSolid
                    class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                />
            </FooterIcon>
        </div>
    </div>
</Footer>
