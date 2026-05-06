import { BrowserWindow, app, globalShortcut } from "electron";

app.commandLine.appendSwitch('enable-features', 'GlobalShortcutsPortal')

export function createShortcuts(window: BrowserWindow) {
    app.whenReady().then(() => {
        const ret = globalShortcut.register("CommandOrControl+N", () => {
            window.webContents.send("new-customer")
        })

        if (!ret) {
            console.log("Registro de atalho falhou")
        }

        console.log(`Atalho novo cliente: ${globalShortcut.isRegistered("CommandOrControl+N")}`)
    })

    window.on("blur", () => {
        globalShortcut.unregister("CommandOrControl+N");
    });

    app.on("will-quit", () => {
        globalShortcut.unregisterAll();
    });
}