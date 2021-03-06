import * as box from "@src/layout/box";
import * as discover from "@src/layout/discover";
import * as doc from "@src/layout/document";
import * as dom from "@src/layout/dom";
import * as mutation from "@src/layout/mutation";
import * as region from "@src/layout/region";

export function start(): void {
    doc.start();
    dom.start();
    mutation.start();
    discover.start();
    box.start();
    region.reset();
}

export function stop(): void {
    dom.stop();
    mutation.stop();
    box.stop();
    region.reset();
    doc.end();
}
