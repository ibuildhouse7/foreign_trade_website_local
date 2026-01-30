import Foundation
import AppKit

func addLogo(toImagePath path: String, text: String) {
    let url = URL(fileURLWithPath: path)
    guard let image = NSImage(contentsOf: url) else {
        print("Failed to load image at \(path)")
        return
    }
    
    let size = image.size
    let offscreenRep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(size.width), pixelsHigh: Int(size.height), bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
    
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: offscreenRep)
    
    image.draw(in: NSRect(origin: .zero, size: size))
    
    let fontSize = size.height * 0.06
    let font = NSFont(name: "Helvetica-Bold", size: fontSize) ?? NSFont.boldSystemFont(ofSize: fontSize)
    
    // Artistic font style approximation: "Inline" style
    // We achieve this by drawing the text with a thick stroke, then a thinner one.
    
    let xPadding: CGFloat = 60
    let yPadding: CGFloat = 80
    
    let attributes: [NSAttributedString.Key: Any] = [
        .font: font,
        .foregroundColor: NSColor.white.withAlphaComponent(0.7)
    ]
    
    let textSize = text.size(withAttributes: attributes)
    let x = size.width - textSize.width - xPadding
    let y = size.height - textSize.height - yPadding
    
    // Draw the "Inline" effect
    // 1. Draw thin background/stroke if needed
    // 2. Draw 3 parallel horizontal lines per letter stroke? No, let's keep it simple and elegant.
    // Let's draw it once with a stroke width to get the outline feel.
    
    let strokeAttributes: [NSAttributedString.Key: Any] = [
        .font: font,
        .foregroundColor: NSColor.clear,
        .strokeColor: NSColor.white.withAlphaComponent(0.8),
        .strokeWidth: 2.0 // Outlined
    ]
    
    text.draw(at: NSPoint(x: x, y: y), withAttributes: strokeAttributes)
    
    // Draw again slightly smaller or with offset to get the "double" line
    let innerAttributes: [NSAttributedString.Key: Any] = [
        .font: font,
        .foregroundColor: NSColor.clear,
        .strokeColor: NSColor.white.withAlphaComponent(0.6),
        .strokeWidth: 0.5 
    ]
    text.draw(at: NSPoint(x: x + 1, y: y + 1), withAttributes: innerAttributes)

    NSGraphicsContext.restoreGraphicsState()
    
    if let pngData = offscreenRep.representation(using: .png, properties: [:]) {
        do {
            try pngData.write(to: url)
            print("Successfully added logo to \(path)")
        } catch {
            print("Failed to write image: \(error)")
        }
    }
}

let args = CommandLine.arguments
if args.count > 1 {
    addLogo(toImagePath: args[1], text: "ISUPABUILD")
}
