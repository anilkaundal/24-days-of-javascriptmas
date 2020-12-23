/**
GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly after the last dot ('.")
in the domain name, for example .com in example.com. To help the users choose from available domains, GoDaddy is introducing a new
feature that shows the type of the chosen top-level domain. You have to implement this feature. To begin with, you want to write a function
that labels the domains as "commercial", “organization”, "network" or “information” for .com, .org, .net or info respectively. For the given list of
domains return the list of their labels.

Example
® For domains = ["en.wiki.org”, “codefights.com", "happy.net”, “code.info"], the output should be domainType(domains) = ["organization”,
"commercial", "network", "information”].

Hints
® split()
® push()
**/
function domainType(domains) {
    const domainParts = domains.map((domain) => domain.split("."));
    let topLevelDomains = [];
    for(let i=0; i<domainParts.length; ++i) {
            domainParts[i].forEach((topLevelDomain) => {
                if(topLevelDomain == "org") {
                    topLevelDomains.push("organization");
                }
                else if(topLevelDomain == "com") {
                    topLevelDomains.push("commercial");
                }
                else if(topLevelDomain == "net") {
                    topLevelDomains.push("network");
                }
                else if(topLevelDomain == "info") {
                    topLevelDomains.push("information");
                }
            }
    )}
    
    return topLevelDomains;
}

/**
// Another Way
function domainType(domains) {
  return domains.map((str) => {
    if (/\.org($|\/)/.test(str)) return 'organization';
    if (/\.com($|\/)/.test(str)) return 'commercial';
    if (/\.net($|\/)/.test(str)) return 'network';
    if (/\.info($|\/)/.test(str)) return 'information';
    if (/\.de($|\/)/.test(str)) return 'germany';
    if (/\.ch($|\/)/.test(str)) return 'switzerland';
    if (/\.co\.uk($|\/)/.test(str)) return 'united kingdom commercial';
    if (/\.uk($|\/)/.test(str)) return 'united kingdom';
    //todo: add more tld
    return 'unkown or invalid domain';
  });
}
**/

/**
* Test Suite 
*/
describe('domainType()', () => {
    it('returns list of domain types', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        
        // act
        const result = domainType(domains);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});
