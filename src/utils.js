
/**
 * Waits for an element to be created.
 *
 * @param {HTMLElement} selector
 * @return {Promise} A promise that will be triggered once specified selector
 *                   is avaliable in the document.
 */
export default function waitForElement(selector) {
    // https://paul.kinlan.me/waiting-for-an-element-to-be-created/

    return new Promise(function(resolve, reject) {
        var element = document.querySelector(selector);

        if(element) {
            resolve(element);
            return;
        }

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                var nodes = Array.from(mutation.addedNodes);
                for(var node of nodes) {
                    if(node.matches && node.matches(selector)) {
                        observer.disconnect();
                        resolve(node);
                        return;
                    }
                };
            });
        });

        observer.observe(document.documentElement,
                         { childList: true, subtree: true });
    });
}
