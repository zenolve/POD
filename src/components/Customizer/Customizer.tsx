import React, { useState, useRef, useEffect, useContext } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer, Rect } from 'react-konva';
import useImage from '../../hooks/use-image';
import { AppContext } from '../../context/AppContext';

const Customizer: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Customizer must be used within an AppProvider');
  }
  const { selectedImage } = context;

  const hoodieUrl = 'https://downloadscdn5.freepik.com/download_psd/jpg/191/191095/410/410555/410555708_236d2355-ef94-45ae-b51b-8d4cfb1cdbf5.jpg?token=exp=1755919076~hmac=819e6a25761d2c11d83c05d25ff52b11&filename=410555708_236d2355-ef94-45ae-b51b-8d4cfb1cdbf5.jpg';
  const [hoodieImage] = useImage(hoodieUrl);
  const [designImage] = useImage(selectedImage || '');

  const stageRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const transformerRef = useRef<any>(null);

  const [imageProps, setImageProps] = useState({
    x: 250,
    y: 250,
    width: 100,
    height: 100,
    rotation: 0,
  });

  // Define the printable area
  const printArea = {
    x: 200,
    y: 200,
    width: 200,
    height: 200,
  };

  useEffect(() => {
    if (transformerRef.current && imageRef.current) {
      transformerRef.current.nodes([imageRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [designImage]);

  const handleExport = () => {
    const uri = stageRef.current?.toDataURL();
    if (uri) {
      const link = document.createElement('a');
      link.download = 'hoodie-design.png';
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-200">
      <div className="flex-grow flex justify-center items-center">
        <div style={{ width: 600, height: 600 }} className="bg-white shadow-lg">
          <Stage width={600} height={600} ref={stageRef}>
            <Layer>
              {hoodieImage && (
                <KonvaImage
                  image={hoodieImage}
                  width={600}
                  height={600}
                />
              )}
              <Rect
                x={printArea.x}
                y={printArea.y}
                width={printArea.width}
                height={printArea.height}
                fill="rgba(0,0,0,0.1)"
                listening={false}
              />
            </Layer>
            <Layer clipFunc={(ctx) => {
              ctx.rect(printArea.x, printArea.y, printArea.width, printArea.height);
            }}>
              {designImage && (
                <KonvaImage
                  ref={imageRef}
                  image={designImage}
                  {...imageProps}
                  draggable
                  onDragEnd={(e) => {
                    setImageProps({
                      ...imageProps,
                      x: e.target.x(),
                      y: e.target.y(),
                    });
                  }}
                  onTransformEnd={() => {
                    if (imageRef.current) {
                      const node = imageRef.current;
                      setImageProps({
                        ...imageProps,
                        x: node.x(),
                        y: node.y(),
                        width: node.width() * node.scaleX(),
                        height: node.height() * node.scaleY(),
                        rotation: node.rotation(),
                      });
                      node.scaleX(1);
                      node.scaleY(1);
                    }
                  }}
                />
              )}
              {designImage && (
                <Transformer
                  ref={transformerRef}
                  boundBoxFunc={(oldBox, newBox) => {
                    // limit resize
                    if (newBox.width < 50 || newBox.height < 50) {
                      return oldBox;
                    }
                    return newBox;
                  }}
                />
              )}
            </Layer>
          </Stage>
        </div>
      </div>
      <div className="p-4 bg-gray-800 flex justify-end">
        <button
          onClick={handleExport}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Export Design
        </button>
      </div>
    </div>
  );
};

export default Customizer;
