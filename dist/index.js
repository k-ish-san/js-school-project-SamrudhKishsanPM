var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadEvents } from "./fetcher.js";
import { renderer } from "./renderer.js";
import { closeModal } from "./modal.js";
// call all function here
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const events = yield loadEvents();
            renderer(events); // to open modal
            closeModal(); // to close modal
        }
        catch (err) {
            console.error(err);
        }
    });
}
init();
